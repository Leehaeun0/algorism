function solution(p, c) {
  let totalPrice = 0;
  let price = 100;
  let store = 0;
  day = p.length;

  for (let i = 0; i < p.length; i++) {
    store += p[i];
    if (store >= c[i]) {
      totalPrice += c[i] * price;
      store -= c[i];
      if (price !== 100) price = 100;
    } else {
      if (price === 25) {
        day = i + 1;
        break;
      }
      price /= 2;
    }
  }
  return (totalPrice / day).toFixed(2) + '';
}

console.log(solution([5, 4, 7, 2, 0, 6], [4, 6, 4, 9, 2, 3])); // "275.00"
