// Forma larga
function flatArray(arr = [], arrAux = [], index = 0) {
  if (index === arr.length) return arrAux;
  if (Array.isArray(arr[index])) {
    // si es un sub arreglo, lo aplanamos con la misma funcion
    const subArray = flatArray(arr[index], arrAux, 0);
    // despues de obtener el arreglo, volvemos al proceso anterior
    return flatArray(arr, subArray, index + 1);
  }
  arrAux.push(arr[index]);
  return flatArray(arr, arrAux, index + 1);
}

// Forma corta
function flatArray(r = [], a = [], t = 0) {
  return t === r.length
    ? a
    : Array.isArray(r[t])
    ? flatArray(r, flatArray(r[t], a, 0), t + 1)
    : (a.push(r[t]), flatArray(r, a, t + 1));
}

module.exports = flatArray;
