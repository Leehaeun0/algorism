function solution(arr) {
  return arr.reduce((acc, cur, i) => {
    return i === arr.length - 1 ? (acc + cur) / arr.length : acc + cur;
  }, 0);
}

console.log(solution([1, 2, 3, 4])); // 2.5
