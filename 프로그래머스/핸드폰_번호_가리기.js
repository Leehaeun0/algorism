function solution(phone) {
  const text = '****************';
  return `${text.slice(0, phone.length - 4)}${phone.slice(-4)}`;
}

console.log(solution('01033334444')); // '*******4444'
