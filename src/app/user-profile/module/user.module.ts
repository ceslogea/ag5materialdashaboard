import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from '../list-user/list-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UsersService } from '../Services/users.service';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

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
        AddUserComponent,
        ListUserComponent,
        EditUserComponent,
        DeleteUserComponent,
    ],
    providers: [
        UsersService
    ],
    exports: []
})
export class UserModule { }
