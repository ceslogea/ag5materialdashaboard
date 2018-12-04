import { Address } from './address';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: Address;

  constructor(id: number, firstName: string, lastName: string, phone: string, email: string, address: Address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}
