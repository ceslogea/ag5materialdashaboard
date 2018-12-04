import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../Model/user';
import { UsersService } from '../Services/users.service';
import { Address } from '../Model/address';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  formControl = new FormControl('', [Validators.required]);
  data: User;

  constructor(public _usersService: UsersService) {
    this.data = new User(-1, '', '', '', '', new Address('', '', '', ''));
  }

  ngOnInit() {
  }

  submit() {
    this._usersService.addUser(this.data).subscribe(
      data => { console.log('ok', data) },
      error => { console.error(error.toString()) },
      () => { console.log('? default') }
    )
  }

}
