import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../Model/user';
import { UsersService } from '../Services/users.service';
import { Address } from '../Model/address';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  formControl = new FormControl('', [Validators.required]);
  data: User;

  constructor(public _usersService: UsersService, private _route: ActivatedRoute) {
    this.data = new User(-1, '', '', '', '', new Address('', '', '', ''));
  }

  ngOnInit() {
    const userEditId = this._route.params.subscribe(params => {
      console.log(params);
      this.data.id = +params['id']; // (+) converts string 'id' to a number
      // dispatch action to load the details here.
      this._usersService.getUser(this.data.id).subscribe(
        data => this.data = data,
        error => console.log(error),
        () => console.log('User Loaded finish')
      )
    });
  }

  submit() {
    this._usersService.deleteUser(this.data.id).subscribe(
      data => { console.log('ok', data) },
      error => { console.error(error.toString()) },
      () => { console.log('? default') }
    )
  }

}
