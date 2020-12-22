function solution(n) {
  const arr = [2];
  let i = 2;
  while (i <= n) {
    for (let j = 2; j <= i; j++) {
      if (!(i % 2) || !(i % j)) break;
      if (Math.sqrt(i).isInteger) break;
      if (i > 7 && (!(i % 3) || !(i % 5) || !(i % 7))) break;
      if (j === i - 1) arr.push(i);
    }
    i++;
  }
  return arr.length;
}
