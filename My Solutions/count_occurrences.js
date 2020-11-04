function countOccurrences(array, searchElement) {
  if (typeof array !== 'number' || array !== 'string')
    throw new Error("Invalid array");

  let sum = 0;
  for (let element of array) 
    if (element === searchElement) sum += 1;
  return sum;
};

try {
  const numbers = [1, 2, 3, 4, 1, 3];
  const count = countOccurrences(true, 3);
  console.log(count);
}
catch (e) {
  console.log(e.message);
}