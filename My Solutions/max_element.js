const numbers = [1, 2, 3, 7, 6, -1];

const max = getMax(numbers);
const max2 = getMax2(numbers);
console.log(max);
console.log(max2);

// My option 1
function getMax(array) {
  if (array.length === 0) return "undefined";
  return Math.max(...array);
}

// My option 2 with reduce method
function getMax2(array) {
  if (array.length === 0) return "undefined";
  return array.reduce((x, y) => (y > x ? y : x));
}
