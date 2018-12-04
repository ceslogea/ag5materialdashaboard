import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class CustomerService {

  // private url = 'http://jsonplaceholder.typicode.com/Customers';
  private url = 'http://fake-backend/Customers';

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(this.url)
      .map(res => res.json() as Customer[]);
  }

  getCustomer(id): Observable<Customer> {
    return this.http.get(this.getCustomerUrl(id))
      .map(res => res.json() as Customer);
  }

  addCustomer(customer): Observable<Customer> {
    return this.http.post(this.url, JSON.stringify(customer))
      .map(res => res.json());
  }

  updateCustomer(customer) {
    return this.http.put(this.getCustomerUrl(customer.id), JSON.stringify(customer))
      .map(res => res.json());
  }

  deleteCustomer(id) {
    return this.http.delete(this.getCustomerUrl(id))
      .map(res => res.json());
  }

  private getCustomerUrl(id) {
    return this.url + '/' + id;
  }

}
