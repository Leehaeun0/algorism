function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] === arr[i]) continue;
    answer.push(arr[i]);
  }
  console.log('Hello Javascript');

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
