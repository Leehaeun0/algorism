function solution(array, commands) {
  let slicedArr = [];
  return commands.map(command => {
    slicedArr = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    return slicedArr[command[2] - 1];
  });
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
); // [5, 6, 3]
