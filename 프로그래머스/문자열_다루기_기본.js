function solution(s) {
  let answer = false;
  if (s.length === 4 || s.length === 6) {
    if (s.match(/^\d+$/)) answer = true;
  }
  return answer;
}

console.log(solution('a234')); // false
console.log(solution('1234')); // true
