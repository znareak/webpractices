class Graph {
  constructor() {
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    // V<---->W
    this.AdjList.get(v).push(w); // link v with w
    this.AdjList.get(w).push(v); // link w with v
  }

  bfs(goal) {
    const graph = this.AdjList;
    const queue = [];
    const discovered = {};
    const randomVertex = [...this.AdjList.keys()][0];

    queue.push(randomVertex);
    discovered[randomVertex] = true;

    while (queue.length) {
      // se elimina el primer nodo de la cola
      const vertex = queue.shift();
    
      console.log(vertex);

      if (vertex === goal) return true;

      const adyacentsVertex = graph.get(vertex);

      for (let i = 0; i < adyacentsVertex.length; i++) {
        const adyacentVertex = adyacentsVertex[i];

        // comprobamos si cada vertice adyacente fue visitado
        if (!discovered[adyacentVertex]) {
          //si el vertice aun no ha sido visitado se encola y se marca como visto
          discovered[adyacentVertex] = true;
          queue.push(adyacentVertex);
        }
      }
    }

    return false;
  }

  printGraph() {
    const queue = [...this.AdjList.keys()];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      const edges = this.AdjList.get(node);
      console.log(`${node} -> (${edges.join(", ")})`);
    }
  }
}

const g = new Graph();
const vertices = [0, 1, 2, 3, 4, 5];

// adding vertices
for (let vertex = 0; vertex < vertices.length; vertex++) {
  g.addVertex(vertices[vertex]);
}

// adding edges
g.addEdge(0, 3);
g.addEdge(0, 4);
g.addEdge(3, 1);
g.addEdge(1, 5);
g.addEdge(5, 4);
g.addEdge(4, 2);
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
//g.printGraph();
g.bfs();
