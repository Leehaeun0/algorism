function solution(s) {
  let pCount = 0;
  let yCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p' || s[i] === 'P') pCount++;
    if (s[i] === 'y' || s[i] === 'Y') yCount++;
  }

  return pCount === yCount;
}

console.log(solution('pPoooyY')); // true

// 다른사람의 코드 참고 1
function numPY(s) {
  console.log(s.toUpperCase().split('P')); // [ '', '', 'OOOYY' ] [ 'PPOOO', '', '' ]
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));

// 다른사람의 코드 참고 1
function numPY2(s) {
  return s.match(/p/gi).length === s.match(/y/gi).length;
}

console.log(numPY2('pPoooyY'));
console.log(numPY2('Pyy'));
