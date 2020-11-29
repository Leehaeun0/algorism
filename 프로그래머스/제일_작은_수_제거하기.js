function solution1(arr) {
  if (arr.length === 1) return [-1];

  const minNum = Math.min(...arr);
  let newArr = arr;
  newArr.splice(arr.indexOf(minNum), 1);

  return newArr;
}

function solution2(arr) {
  if (arr.length === 1) return [-1];

  const minNum = Math.min(...arr);
  let newArr = arr;

  arr.forEach((num, i) => {
    if (num === minNum) newArr.splice(i, 1);
  });

  return newArr;
}

console.log(solution1([4, 3, 2, 1])); // [4,3,2]
console.log(solution2([4, 3, 2, 1])); // [4,3,2]
