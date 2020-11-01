// Object Equality

// Constructor Function

let address1 = new ShowAddress("Zaliakalnio", "Kaunas", "45632");
let address2 = new ShowAddress("Zaliakalnio", "Kaunas", "45632");
let address3 = address1;

function ShowAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
