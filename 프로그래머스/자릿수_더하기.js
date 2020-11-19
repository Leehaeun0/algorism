function solution(n) {
  return (n + '').split('').reduce((acc, cur) => +acc + +cur, 0);
}

console.log(solution(1234)); // 10
