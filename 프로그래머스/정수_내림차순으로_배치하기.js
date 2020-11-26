function solution(n) {
  const arr = (n + '').split('');
  return +arr.sort((a, b) => b - a).join('');
}

console.log(solution(118372)); // 873211
