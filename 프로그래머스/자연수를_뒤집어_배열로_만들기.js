// function solution(n) {
//   const stringNum = n + '';
//   let array = [];

//   for (const value of stringNum) {
//     array.push(+value);
//   }

//   return array.sort((a, b) => b - a);
// }

// console.log(solution(27648790)); // [9, 8, 7, 7, 6, 4, 2, 0]

// console.log(typeof ('100' - '20'));

function solution(n) {
  return (n + '')
    .split('')
    .sort((a, b) => b - a)
    .map(v => +v);
}

function solution(n) {
  const stringNum = n + '';
  let array = [];

  for (let i = 0; i < stringNum.length; i++) {
    array.push(+stringNum.substring(i, i + 1));
  }

  return array.reverse();
}

console.log(solution(27648790)); // [9, 8, 7, 7, 6, 4, 2, 0]
