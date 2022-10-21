const bfs = (graph, target, key) => {
  const result = []; // Here we collect the traversed nodes
  const start = key || Object.keys(graph)[0]; // no longer a parameter
  const queue = [start];
  const visited = new Set(queue); // Better efficiency
  const predecessors = {}

  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node); // Collect!

    if (!graph[node]) continue; // No need to mutate `graph`

    // obtener los vertices adyacentes no visitados
    // y marcarlos como visitados al mismo tiempo
    const neighbors = graph[node].filter(neighbor => {
      // si el vertice ya ha sido visitado, pasamos al siguiente
      if (visited.has(neighbor)) return false;

      // verificamos si el vecino (vertices adyacentes) 
      // del `node` coincide con el nodo que buscamos
      if (neighbor === target) {
        // retrocedemos por el camino que se llego al vertice
        const path = [neighbor];
        while (node !== start) {
          path.push(node);
          node = predecessors[node];
        }
        path.push(node);
        path.reverse();
        console.log(path.join(" -> "))
        return;
      }
      predecessors[neighbor] = node;

      return visited.add(neighbor);
    }
    );

    // Append these neighbors at the end of the queue (mutation)
    queue.push(...neighbors);
  }
  return result;
}

const graph = {
  A: ['B', 'C', 'G'],
  B: ['D', 'E', "A"],
  C: ['E', 'G'],
  D: ["F"],
  E: ['G'],
  F: [],
  G: ["A"]
};

//bfs(graph, "E");
bfs(graph, "G");