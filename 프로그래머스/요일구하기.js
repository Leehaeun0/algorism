function solution(a, b) {
  const newDate = new Date(`2016-${a}-${b}`);

  const options = { weekday: 'short' };

  return newDate.toLocaleDateString('en-US', options).toUpperCase();
}

console.log(solution(1, 24)); // 'TUE'
