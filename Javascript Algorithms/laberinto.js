function laberinto(size, maze) {
  const [w, h] = size.split(" ").map(Number);
  const MIN_X = 1,
    MAX_X = w - 1,
    MIN_Y = 1,
    MAX_Y = h - 1;
  const graph = new Map();
  let board = [],
    xTarget,
    yTarget,
    x,
    y;

  maze = maze.split("\n").map((p) => p.trim().split(""));

  for (let i = MIN_X; i < MAX_X; i++) {
    let aux = [];
    for (let k = MIN_Y; k < MAX_Y; k++) {
      aux.push(maze[i][k]);
    }
    board.push(aux);
  }

  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      const point = board[i][k];
      if (point == "A") {
        x = i;
        y = k;
      }

      if (point == "B") {
        (xTarget = i), (yTarget = k);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      const key = `${i},${k}`;
      const point = board[i][k];

      if (point == "A" || point == "B" || point == ".") {
        graph.set(key, []);
      }

      // comprobar si existe un nodo arriba adyacente
      if (
        (board[i - 1]?.[k] != undefined && board[i - 1]?.[k] == ".") ||
        board[i - 1]?.[k] == "B"
      ) {
        graph.set(key, [...(graph.get(key) || []), [i - 1, k]]);
      }

      // comprobar si existe un nodo abajo adyacente
      if (
        (board[i + 1]?.[k] != undefined && board[i + 1]?.[k] == ".") ||
        board[i + 1]?.[k] == "B"
      ) {
        graph.set(key, [...(graph.get(key) || []), [i + 1, k]]);
      }

      // comprobar si existe un nodo a la izq. adyacente
      if (
        (board[i]?.[k - 1] != undefined && board[i]?.[k - 1] == ".") ||
        board[i]?.[k - 1] == "B"
      ) {
        graph.set(key, [...(graph.get(key) || []), [i, k - 1]]);
      }

      // comprobar si existe un nodo a la der. adyacente
      if (
        (board[i]?.[k + 1] != undefined && board[i]?.[k + 1] == ".") ||
        board[i]?.[k + 1] == "B"
      ) {
        graph.set(key, [...(graph.get(key) || []), [i, k + 1]]);
      }
    }
  }
  function shortestPath(startVertex, endVertex) {
    const queue = [startVertex];
    const predecessor = {};
    const visited = {};
    let tail = 0;
    let directions = [];

    while (tail < queue.length) {
      let vertex = queue[tail++]; // Pop a vertex off the queue.
      const adjacentVertices = graph.get(vertex); // aristas or neighbors nodes

      for (let i = 0; i < adjacentVertices.length; ++i) {
        let adjacentVertice = adjacentVertices[i].toString();

        if (visited[adjacentVertice]) continue;

        // check the vertex as visited
        visited[adjacentVertice] = true;
        if (adjacentVertice === endVertex) {
          // Check if the path is complete.
          const path = [adjacentVertice]; // If so, backtrack through the path.

          while (vertex !== startVertex) {
            path.push(vertex);
            vertex = predecessor[vertex];
          }

          path.push(vertex);
          path.reverse();
          //console.log(path.join(" -> "));
          console.log("YES");
          console.log(path.length - 1);
          for (let i = 0; i < path.length - 1; i++) {
            const [x, y] = path[i].split(",").map(Number);
            const [nextX, nextY] = path[i + 1].split(",").map(Number);
            if (x - 1 == nextX) {
              directions.push("U");
            }
            if (x + 1 == nextX) {
              directions.push("D");
            }
            if (y + 1 == nextY) {
              directions.push("R");
            }
            if (y - 1 == nextY) {
              directions.push("L");
            }
          }
          console.log(directions.join(''))
          return;
        }

        predecessor[adjacentVertice] = vertex;
        queue.push(adjacentVertice);
      }
    }
    console.log("NO");
    console.log("no hay solucion del nodo " + startVertex + " al " + endVertex);
  }

  //bfs(`${xTarget},${yTarget}`);
  //DFS(`${x},${y}`, `${xTarget},${yTarget}`);
  shortestPath(`${x},${y}`, `${xTarget},${yTarget}`);
  console.log();
}

// laberinto(
//   "6 8",
//   `########
//   #.A#..B#
//   #.##.###
//   #......#
//   #......#
//   ########`
// );

// laberinto(
//   "6 8",
//   `########
//   #.A#..##
//   #.##.###
//   #.##..B#
//   #......#
//   ########`
// );

laberinto(
  "5 8",
  `########
  #.A#...#
  #.##.#B#
  #......#
  ########`
);

laberinto(
  "5 8",
  `########
  #.A#..##
  #.##.#B#
  #....###
  ########`
);

laberinto(
  "5 8",
  `########
  #.A#..##
  #.##.#B#
  #....#.#
  ########`
);

laberinto(
  "5 8",
  `########
  #.A#.B.#
  #.##.#.#
  #......#
  ########`
);

laberinto(
  "12 8",
  `########
  #.A#...#
  #.##.#.#
  #......#
  ######.#
  #..#.#.#
  #......#
  #.#.####
  #.#...##
  #...#..#
  #...B..#
  ########`
);
