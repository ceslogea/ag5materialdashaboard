import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddUserComponent } from '../../user-profile/add-user/add-user.component';
import { ListUserComponent } from '../../user-profile/list-user/list-user.component';
import { EditUserComponent } from '../../user-profile/edit-user/edit-user.component';
import { DeleteUserComponent } from '../../user-profile/delete-user/delete-user.component';
import { DeleteCustomerComponent } from '../../customer-profile/delete-customer/delete-customer.component';
import { ListCustomerComponent } from '../../customer-profile/list-customer/list-customer.component';
import { EditCustomerComponent } from '../../customer-profile/edit-customer/edit-customer.component';
import { AddCustomerComponent } from '../../customer-profile/add-customer/add-customer.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: AddUserComponent },
    { path: 'user-profile-edit/:id',   component: EditUserComponent },
    { path: 'user-profile-list',   component: ListUserComponent },
    { path: 'user-profile-delete/:id',   component: DeleteUserComponent },
    { path: 'customer-profile',   component: AddCustomerComponent },
    { path: 'customer-profile-edit/:id',   component: EditCustomerComponent },
    { path: 'customer-profile-list',   component: ListCustomerComponent },
    { path: 'customer-profile-delete/:id',   component: DeleteCustomerComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
