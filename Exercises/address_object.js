// street
// city
// zip code
// showAddress(address)

const address = {
  street: "Stikliu",
  city: "Vilnius",
  zipCode: "01521",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
