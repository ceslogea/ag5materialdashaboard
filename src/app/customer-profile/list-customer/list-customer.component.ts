import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  dataSource: Customer[] = [];
  tableSubtitle = 'List of Customers';
  tableTitle = 'Customers';

  constructor(public _CustomerService: CustomerService) { }

  ngOnInit() {
    this.dataSource = [];

    this._CustomerService.getCustomers().subscribe(
      data => this.dataSource = data,
      err => this.logError(err),
      () => console.log('Updated Ticket'));
  }

  logError(erros: any) {

  }

}
