import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { ListCustomerComponent } from '../list-customer/list-customer.component';
import { CustomerService } from '../services/customer.service';
import { fakeBackendProvider } from '../../user-profile/Services/fakeBackEnd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatTooltipModule,
        RouterModule
    ],
    declarations: [
        ListCustomerComponent,
        AddCustomerComponent,
        EditCustomerComponent,
        DeleteCustomerComponent,
    ],
    providers: [
        CustomerService
    ],
    exports: [],

})
export class CustomerModule { }
