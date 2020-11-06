function solution(board, moves) {
  const resultArr = [];
  let countDelete = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (!board[j][moves[i] - 1]) continue;
      const item = board[j][moves[i] - 1];

      if (item === resultArr[resultArr.length - 1]) {
        resultArr.pop();
        board[j][moves[i] - 1] = 0;
        countDelete += 2;
        break;
      }
      resultArr.push(item);
      board[j][moves[i] - 1] = 0;
      break;
    }
  }
  return countDelete;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
); // 4
