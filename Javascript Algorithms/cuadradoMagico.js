// function cuadrado(n) {
//   const MAX_VALUE = n * n;
//   const BOARD = Array(n)
//     .fill(0)
//     .map(() => Array(n).fill(0));
//   const MIDDLE = Math.floor(n / 2);
//   let x = 0;
//   let y = MIDDLE;
//   let currentN = 1;
//   while (currentN <= MAX_VALUE) {
//     BOARD[x][y] = currentN;
//     // si estamos en la primera fila y sobrepasamos,
//     if (x === 0) {
//       if (y === n - 1) {
//         x++;
//       } else {
//         x = n - 1; // pasamos hasta abajo (la ultima fila) !comprobar si en esa fila hay numero
//         y++; // pasamos a la siguiente celda !comprobar si estamos en la ultima celda (n-1)
//       }
//     } else {
//       x--;
//       y++;
//       // si no estamos en la primera fila pero al intentar colocar el numero en la celda diagonal
//       // se sobre pasa de la matriz la pasamos al anterior fila
//       if (y >= n) {
//         y = 0;
//         // si al intentar poner un numero en la celda diagonal, la misma se encuntra ocupada, lo ponemos debajo
//       } else if (BOARD[x][y] !== 0) {
//         x += 2;
//         y--;
//       }
//     }
//     currentN++;
//   }
//   BOARD.forEach((x) => {
//     str = "";
//     x.forEach((n) => (str += n + " "));
//     console.log(str);
//     str = "";
//   });
//   console.log("\n");
// }

// cuadrado(3);
// cuadrado(5);
// cuadrado(7);

cuadrado = (
  n,
  m = n * n,
  b = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0)),
  j = Math.floor(n / 2),
  x = 0,
  y = j,
  t = 1,
  s = ""
) => {
  while (t <= m) {
    b[x][y] = t;
    x === 0
      ? y === n - 1
        ? x++
        : ((x = n - 1), y++)
      : ((x--, y++), y >= n && (y = 0), b[x][y] != 0 && ((x += 2), y--));
    t++;
  }
  b.forEach(
    (x) => (x.forEach((n) => (s += n + " ")), console.log(s), (s = ""))
  );
  console.log("\n");
};
cuadrado(3);
cuadrado(5);
cuadrado(7);
