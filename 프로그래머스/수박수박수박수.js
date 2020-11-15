function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) answer = i % 2 ? answer + '박' : answer + '수';
  return answer;
}

console.log(solution(3)); // 수박수
