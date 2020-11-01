const marks = [90, 90, 91];

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  count = 0;

  for (let mark of marks) {
    sum += mark;
    count++;
  }

  avg = sum / count;

  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  return "A";
}
