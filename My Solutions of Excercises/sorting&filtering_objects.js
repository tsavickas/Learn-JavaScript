// Initial data

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2019, rating: 4.7 },
  { title: "d", year: 2018, rating: 4.9 },
  { title: "e", year: 2018, rating: 3.8 },
  { title: "f", year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Ascending / Descending order
// Pick their title

// My option 1. Ascending order
const output1 = [];
for (let movie of movies)
  if (movie.year === 2018 && movie.rating > 4) output1.push(movie);

const sortedOutput = output1.sort(function (x, y) {
  if (x.rating < y.rating) return -1;
  if (x.rating > y.rating) return 1;
  return 0;
});

console.log(
  "Option 1:",
  output1.map((output1) => output1.title)
);

// My option 2 using chaining methods. Descending order
const output2 = movies
  .filter((movie) => movie.year === 2018 && movie.rating > 4)
  .sort(function (x, y) {
    if (x.rating < y.rating) return 1;
    if (x.rating > y.rating) return -1;
    return 0;
  })
  .map((movies) => movies.title);

console.log("Option 2:", output2);
