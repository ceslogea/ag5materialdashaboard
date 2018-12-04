import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/Customer';
import { Address } from '../../user-profile/Model/address';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  formControl = new FormControl('', [Validators.required]);
  data: Customer;

  constructor(public _CustomersService: CustomerService) {
    this.data = new Customer(-1, '', '', '', '', new Address('', '', '', ''));
  }

  ngOnInit() {
  }

  submit() {
    this._CustomersService.addCustomer(this.data).subscribe(
      data => { console.log('ok', data) },
      error => { console.error(error.toString()) },
      () => { console.log('? default') }
    )
  }

}
