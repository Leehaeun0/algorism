/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
function solution1(d, budget) {
  const sortedArr = d.sort((a, b) => a - b);
  let sum = 0;

  for (var i = 0; i < sortedArr.length; i++) {
    if (sum + sortedArr[i] > budget) {
      break;
    }
    sum += sortedArr[i];
  }

  return i;
}

// 참고로 이것도 맞는 문법이다. for () 안의 세 가지문 모두 생략할 수도 있다.
// 문법 참고링크 https://tc39.es/ecma262/#sec-for-statement
// 문법 참고링크 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for

function solution2(d, budget) {
  const sortedArr = d.sort((a, b) => a - b);
  let sum = 0;
  let i = 0;

  for (; i < sortedArr.length; i++) {
    if (sum + sortedArr[i] > budget) {
      break;
    }
    sum += sortedArr[i];
  }

  return i;
}

console.log(solution1([1, 3, 2, 5, 4], 9)); // 3
console.log(solution2([1, 3, 2, 5, 4], 9)); // 3
