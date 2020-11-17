function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter(v => !(v % divisor));
  if (!answer.length) return [-1];
  return answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
