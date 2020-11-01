const numbers = [1, 2, 3, 4, 1, 3];

const count = countOccurrences(numbers, 3);

console.log(count);

// Option 1
function countOccurrences(array, searchElement) {
  let sum = 0;
  for (let element of array) if (element === searchElement) sum += 1;
  return sum;
}
