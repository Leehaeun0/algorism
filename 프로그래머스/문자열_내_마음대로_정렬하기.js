function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) return a > b ? 1 : a < b ? -1 : 0;
    return a[n] > b[n] ? 1 : -1;
  });
}

console.log(solution(['abce', 'abcd', 'cdx'])); // [abcd, abce, cdx]
