import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { User } from 'app/user-profile/Model/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  dataSource: User[] = [];
  tableSubtitle = 'List of Users';
  tableTitle = 'Users';

  constructor(public _userService: UsersService) {
    console.log('sxadsadsadsadsadsasadsadasdsad');
  }

  ngOnInit() {
    this.dataSource = [];
    this._userService.getUsers().subscribe(
      data => this.dataSource = data,
      err => this.logError(err),
      () => console.log('Updated Ticket'));
  }

  logError(erros: any) {

  }

}
