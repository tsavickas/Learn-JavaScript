// Factory Function

function showAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let address1 = showAddress("Stiklu", "Vilnius", "01521");
console.log(address1);

// Constructor Function

function ShowAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address2 = new ShowAddress("Zaliakalnio", "Kaunas", "45632");
console.log(address2);
