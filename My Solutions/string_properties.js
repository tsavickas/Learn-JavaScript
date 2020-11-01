const movie = {
  title: "The Shawshank Redemption",
  releaseYear: 1994,
  rating: 9.3,
  director: "Frank Darabont",
};

showProperties(movie);

function showProperties(object) {
  for (let key in movie) {
    if (typeof movie[key] === "string") console.log(key, movie[key]);
  }
}
