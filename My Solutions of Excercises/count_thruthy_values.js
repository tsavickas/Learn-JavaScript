const array = [1, 2, 3, "", true, NaN, "Tadas", false];
console.log(countTruthy(array));

function countTruthy(array) {
  let truthy = 0;

  for (let item of array) if (item) truthy += 1;
  return truthy;