const numbers = [1, 2, 3, 4, -5, 10, 1, 1];

const output = except(numbers, [1, 3, 11, 2]);

console.log(output);

function except(array, excluded) {
  const newArray = [];
  for (let item of array) if (!excluded.includes(item)) newArray.push(item);
  return newArray;
}
