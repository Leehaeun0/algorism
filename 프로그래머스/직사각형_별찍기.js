function solution1(data) {
  const n = data.split(' ');
  const a = Number(n[0]);
  const b = Number(n[1]);

  let answer = '';

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      answer += '*';
    }
    console.log(answer);
    answer = '';
  }
}

function solution2(data) {
  const n = data.split(' ');
  const a = Number(n[0]);
  const b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    console.log('*'.repeat(a));
  }
}

solution1('5 3');
console.log('-----');
solution2('5 3');
