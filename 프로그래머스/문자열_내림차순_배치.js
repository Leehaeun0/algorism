function solution(s) {
  let answer = '';
  answer = s.split('').sort().reverse().join('');
  return answer;
}

console.log(solution('Zbcdefg')); // gfedcbZ
