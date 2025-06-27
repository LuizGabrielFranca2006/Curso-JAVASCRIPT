// create a range function
function range(a, b, s = 1) {
  const from = b === undefined ? 1 : a;
  const to = b === undefined ? a : b;
  const direction = from < to ? 1 : -1;
  const step = Math.abs(s) * direction;

  const numbers = [];
  let i = from;

  for (; direction > 0 ? i <= to : i >= to; i += step) {
    numbers.push(i);
  }
  return numbers;
}


console.log(range(5));    // range(5) -> [1, 2, 3, 4, 5]
console.log(range(6, 11));   // range(6, 11) -> [6, 7, 8, 9, 10 ,11]
console.log(range(10, 19, 2));    // range(10, 19, 2) -> [10, 12, 14, 16, 18]
console.log(range(6, 2));   // range(6, 2) -> [6, 5, 4, 3, 2]
console.log(range(8, -3, -4));   // range(8, -3, 4) -> [8, 4, 0]