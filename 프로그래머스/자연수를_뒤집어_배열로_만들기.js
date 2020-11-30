/* eslint-disable prefer-const */

// function solution(n) {
//   const stringNum = n + '';
//   let array = [];

//   for (const value of stringNum) {
//     array.push(+value);
//   }

//   return array.sort((a, b) => b - a);
// }

// function solution1(n) {
//   return (n + '')
//     .split('')
//     .sort((a, b) => b - a)
//     .map(v => +v);
// }

// function solution(n) {
//   console.log(arguments);
//   const stringNum = n + '';
//   let array = [];

//   for (let i = 0; i < stringNum.length; i++) {
//     array.push(+stringNum.substring(i, i + 1));
//   }

//   return array.reverse();
// }

function solution1(n) {
  const stringNum = n + '';
  let array = [];

  for (const value of stringNum) {
    array.push(+value);
  }

  return array.reverse();
}

// => 위 코드에서 reverse 순회를 한번 더 줄인 코드

function solution2(n) {
  const stringNum = n + '';
  let array = [];

  for (let i = stringNum.length; i > 0; i--) {
    array.push(+stringNum.substring(i - 1, i));
  }

  return array;
}

// 숫자를 문자로 바꾸는 과정을 거치지 않은 다른사람의 코드

const solution3 = num => {
  let remain = num;
  let res = [];
  while (remain > 0) {
    const val = remain % 10;
    res.push(val);
    remain = Math.floor(remain / 10);
  }
  return res;
};

// for문은 많이돌지만 가독성이 좋은 코드

function solution4(n) {
  return (n + '')
    .split('')
    .reverse()
    .map(v => +v);
}

// 위 코드의 변형인데 코딩테스트 속도는 제일 빠르다...?

function solution5(n) {
  return (n + '').split('').reverse().map(Number);
}

console.log(solution1(27648790)); // [0, 9, 7, 8, 4, 6, 7, 2]
console.log(solution2(27648790)); // [0, 9, 7, 8, 4, 6, 7, 2]
console.log(solution3(27648790)); // [0, 9, 7, 8, 4, 6, 7, 2]
console.log(solution4(27648790)); // [0, 9, 7, 8, 4, 6, 7, 2]
console.log(solution5(27648790)); // [0, 9, 7, 8, 4, 6, 7, 2]
