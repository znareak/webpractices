let arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5],
];

const isInvalidArray = (arr, len) =>
  [...new Set(arr)].filter((a) => a > 0).length != len;

const validateEachFrame = (arr = []) => {
  let frames = [];
  for (let k = 0; k < 9; k += 3) {
    for (let i = 0; i < 9; i += 3) {
      let frame = [];
      for (let j = 0; j < 3; j++) {
        frame.push(arr[k + j].slice(i, i + 3));
      }
      frames.push(frame);
    }
  }

  for (const frameGroup of frames) {
    const plane = frameGroup.reduce(
      (prev, current) => prev.concat(current),
      []
    );
    if (isInvalidArray(plane, 9)) return false;
  }
  return true;
};

function validSolution(board) {
  for (let i = 0; i < 9; i++) {
    if (isInvalidArray(board[i], 9)) return false;
    let tmp = [];
    for (let j = 0; j < 9; j++) tmp.push(board[j][i]);
    if (isInvalidArray(tmp, 9)) return false;
    tmp = [];
  }
  return validateEachFrame(board);
}

validSolution(arr);
