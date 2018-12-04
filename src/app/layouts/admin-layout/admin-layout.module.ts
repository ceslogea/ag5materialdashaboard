import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { ListCustomerComponent } from '../../customer-profile/list-customer/list-customer.component';
import { AddCustomerComponent } from '../../customer-profile/add-customer/add-customer.component';
import { EditCustomerComponent } from '../../customer-profile/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from '../../customer-profile/delete-customer/delete-customer.component';
import { CustomerService } from '../../customer-profile/services/customer.service';
import { AddUserComponent } from '../../user-profile/add-user/add-user.component';
import { ListUserComponent } from '../../user-profile/list-user/list-user.component';
import { DeleteUserComponent } from '../../user-profile/delete-user/delete-user.component';
import { EditUserComponent } from '../../user-profile/edit-user/edit-user.component';
import { UsersService } from '../../user-profile/Services/users.service';
import { DashboardModule } from '../../dashboard/dashboard.module';
import { UserModule } from '../../user-profile/module/user.module';
import { CustomerModule } from '../../customer-profile/module/customer.module';
import { fakeBackendProvider } from '../../user-profile/Services/fakeBackEnd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    DashboardModule,
    UserModule,
    CustomerModule,

    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [

    // ListCustomerComponent,
    // AddCustomerComponent,
    // EditCustomerComponent,
    // DeleteCustomerComponent,

    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,

  ],
  providers: [
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})

export class AdminLayoutModule { }
