export class Address {
  street: string;
  country: string;
  city: string;
  zipcode: string;

  constructor(street: string, country: string, city: string, zipcode: string) {
    this.street = street;
    this.country = country;
    this.city = city;
    this.zipcode = zipcode;
  }
}
