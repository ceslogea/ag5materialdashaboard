/**
 * Implementation of the Mock-Backend
 */

import {
    Http, BaseRequestOptions, Response, ResponseOptions,
    RequestMethod, XHRBackend, RequestOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

const _fakeBackeendUrlPrefix = '/fake-backend/';
const _singleMatcher = /\/fake-backend\/[^a-zA-Z]\/([0-9]+)/i;

// Local Storage Service
function mockResponse(connection: MockConnection, status: number, data: any) {
    connection.mockRespond(new Response(new ResponseOptions({
        status: status,
        body: data
    })));
}

function add(connection: MockConnection, data: Array<any>) {
    const localStorageKey = getKey(connection);
    const idsArray = data.map(function (o) { return +o['id']; });
    const newId = data.length === 0 ? 1 : (Math.max.apply(Math, idsArray) + 1);
    const receivedUser = JSON.parse(connection.request.getBody());
    const newUser = Object.assign(receivedUser, { id: newId });
    data[data.length] = newUser;
    localStorage.setItem(localStorageKey, JSON.stringify(data));
    mockResponse(connection, 200, newUser);
}

function update(connection: MockConnection, data: Array<any>) {
    const localStorageKey = getKey(connection);
    const receivedUser = JSON.parse(connection.request.getBody());
    const clonedUser = Object.assign({}, receivedUser);
    let UserWasFound = false;

    data.some((element: Object, index: number) => {
        if (element['id'] === clonedUser.id) {
            data[index] = clonedUser;
            UserWasFound = true;
            return true;
        }
    });

    if (!UserWasFound) {
        mockResponse(connection, 400, 'Cannot update because T was not found');
    } else {
        localStorage.setItem(localStorageKey, JSON.stringify(data));
        mockResponse(connection, 200, data[(data.length - 1)]);
    }
}

function ddelete(connection: MockConnection, data: Array<any>) {
    const localStorageKey = getKey(connection);
    const urlParts = connection.request.url.split('/');
    const id = urlParts[urlParts.length - 1];
    const sizeBeforeDelete = data.length;
    data = data.filter((element: Object) => element['id'] !== +id); // remove
    if (sizeBeforeDelete === data.length) {
        mockResponse(connection, 400, 'Something could not be deleted because was not found');
    } else {
        localStorage.setItem(localStorageKey, JSON.stringify(data));
        mockResponse(connection, 200, null);
    }
}

function getKey(connection: MockConnection) {
    let localStorageKey = '';
    if (connection.request.url.split(_fakeBackeendUrlPrefix).length > 2) {
        localStorageKey = connection.request.url.split(_fakeBackeendUrlPrefix)[
            (connection.request.url.split(_fakeBackeendUrlPrefix).length - 2)];
    } else {
        localStorageKey = connection.request.url.split(_fakeBackeendUrlPrefix)[
            (connection.request.url.split(_fakeBackeendUrlPrefix).length - 1)];
    }
    return localStorageKey.split('/')[0];
}

function getArrayResponse(connection: MockConnection) {
    const emptyArr = [];
    return JSON.parse(localStorage.getItem(getKey(connection))) || emptyArr;
}

function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            console.log('fakeBackendFactory subscribe')
            const method = connection.request.method;
            const withFakeUrl = connection.request.url.indexOf(`${_fakeBackeendUrlPrefix}`) > 0;
            const hasIdInFakeUrl = connection.request.url.match(/\/([0-9]+)/i);

            // Users
            if (hasIdInFakeUrl && withFakeUrl) {
                const objectId = hasIdInFakeUrl[1];
                if (method === RequestMethod.Get) { // Get{id}
                    // const dataSource = getArrayResponse(connection);
                    const response = getArrayResponse(connection).find(r => +r.id === +objectId)
                    mockResponse(connection, 200, response);
                    return;
                } else if ( method === RequestMethod.Put) { // Update
                    update(connection, getArrayResponse(connection))
                    return;
                } else if (method === RequestMethod.Delete) {
                    ddelete(connection, getArrayResponse(connection));
                    return;
                }
            } else if (withFakeUrl) {
                if (method === RequestMethod.Get) { // Get All
                    mockResponse(connection, 200, getArrayResponse(connection));
                    return;
                } else if (method === RequestMethod.Post) {
                    add(connection, getArrayResponse(connection))
                    return;
                }
            }

            // pass through any requests not handled above
            const realHttp = new Http(realBackend, options);
            const requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(
                    (response: Response) => { connection.mockRespond(response); },
                    (error: any) => { connection.mockError(error); }
                );

        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
}
