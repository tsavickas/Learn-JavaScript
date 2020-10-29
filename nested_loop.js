// Nested loop

showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    row_with_stars = "";

    for (let i = 0; i < row; i++) {
      row_with_stars += "*";
    }
    console.log(row_with_stars);
  }
}

// Solution with repeat()

showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    console.log("*".repeat(row));
  }
}
