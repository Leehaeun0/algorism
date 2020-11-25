const sum = (more, less) => {
  let arr = [];
  for (let i = less; i <= more; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
};

function solution(a, b) {
  if (a === b) return a;
  if (a > b) return sum(a, b);
  return sum(b, a);
}

console.log(solution(3, 5)); // 12
