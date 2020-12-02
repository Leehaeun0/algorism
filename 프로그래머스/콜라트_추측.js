function solution(num) {
  let count = 0;
  let newNum = num;

  while (newNum > 1) {
    newNum = newNum % 2 ? newNum * 3 + 1 : newNum / 2;
    count++;
    if (count >= 500) {
      count = -1;
      break;
    }
  }

  return count;
}

console.log(solution(6)); // 8
