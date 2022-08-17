
sum = (a, b) => {
  t=10e5
  if(a < t && b < t) return a+b
  throw new RangeError("a/b son mayores que 10^5")
}

/*
console.log(sum(3,2))
console.log(sum(2612,8712))
console.log(sum(3500, 40000))
console.log(sum(3000000, 1000000))*/


birthday = (n, k) => (n/k)%1!=0?-1:(n/k);
/*console.log(birthday(10, 5))
console.log(birthday(18, 6))
console.log(birthday(3, 2))
console.log(birthday(10, 11))*/

l = _ => _.length

/*console.log(l("I like watermelon code."))
console.log(l("Palta"))
console.log(l("12345 7"))*/

c = (_, $) => _+' '+$;

/*console.log(c("watermelon","code"))
console.log(c("good","morning"))*/
//pene
t = (n1, n2) =>{
  i=n1, c=0;
  while(i<=n2){
    p= Array.from((i+''), Number), b=1
    for(k=0; k<p.length-1 && b; k++) if (p[k]==p[k+1]) b=0
    b && c++, i++
  }
  return c;
}

console.time("test 1")
console.log(t(2, 10e2))
console.timeEnd("test 1")

l = ()=>{
  n=prompt("cantidad de items"),items=[], i=0
  while(i<n) items[i]=prompt('Item '+(i+1)),i++
  return items[(+prompt("Elemento a querer:"))-1]
}

//console.log(l())

//l = (e, i) => e.split(' ')[--i]

/*console.log(l(5,"cheese milk watermelon carrots potatoes",4))
console.log(l(3,"corn chocolate gum",1))*/

// contar los numeros de n a m sin tener en cuenta aquellos numeros (ya sean de 3, 4... cifras)  que tengan digitos iguales adyacentes
t = (n, m, c=0) =>{
  while(n<=m){
   p=[...n+''].map(_=>+_),b=1
    for(k=0; k<p.length-1 && b; k++) 
    if (p[k]==p[k+1]) b=0
    b && c++, n++
  }  
  return c;
}

/*

Fran esta obsesionado con el ordenado de números, pero él no sabe programar. Entonces, le pide a ustedes realizar un código que reciba n números, y sumes los k valores más grandes.

Input 📥 
La primera línea contendrá 2 enteros n (1 ≤ n ≤ 10000) y k (1 ≤ k ≤ n).
La segunda línea contiene n números separados por un espacio, estos números pueden ser entre 1 y 10000.

Output 📤 
Se debe mostrar por pantalla la suma total de los k elementos más grandes
*/
u = ($=_=>prompt('').split(' ').map(_=>+_), [n, m] = $())=> $().sort((a,b) =>a-b).slice(-m).reduce((a,b)=>a+b)
u = (p1,p2,$=_=>_.split(' ').map(_=>+_), [n, m] = $(p1))=> $(p2).sort((a,b) =>a-b).slice(-m).reduce((a,b)=>a+b)

/*
A Andrea le encantan los arreglos bidimensionales, y ha inventado un juego para jugar con sus amigas, en esté se tendrá que identificar si una grilla es perfecta, ¿Cuándo una grilla es perfecta? Cuando tiene números 1 cruzando la matriz diagonalmente hacia un lado o otro.
Se sabe que la matriz siempre será de un largo y alto impar
*/
/*p = ()=>{
  size = +prompt(), i=k=0;
  arr = Array(size).fill([]).map(_=> {
    sub= prompt().split(' ').map(_ => +_)
    return sub
  })


  while(i<size && !arr[0][size-1]){
    if(!arr[i][k]) return "NO"
    i++, k++; 
  }

  i =0, k = size-1;
  while(k>=0 && !arr[0][0]){
    if(!arr[i][k]) return "NO"
    i++, k--; 
  }

  return "YES"
}*/

p = (size = +prompt(),i=0,k=0)=>{
  arr = Array(size).fill([]).map(_=> prompt().split(' ').map($ => +$))
  while(i<size && !arr[0][size-1]) if(!arr[i++][k++]) return "NO" 
  i =0, k = size-1;
  while(k>=0 && !arr[0][0]) if(!arr[i++][k--]) return "NO"
  return "YES"
}

r = (c = prompt(), a = prompt().split(' ').map($ => +$)) => [...new Set(a)].sort((i, o) => i - o)

s = (a = prompt().split(' ').map($ => +$), b = [...a], m = [...a], n = a.pop(), pila = '', xa = '') => {
  while (n != undefined) pila += n + ' ', xa += m.shift() + ' ', n = a.pop()
  console.log("PILA: " + pila, "\nxA: " + xa)
}

o = _ => String.fromCharCode(_)

/*
Tu tarea será hacer un programa que reciba un string S, el programa debe identificar si está en lowercase, o uppercase, además de esto, deberá cambiarlo a su contrario, pero sin usar los upper() y lower() de dicho lenguaje de programación, con esto me refiero a que esta prohibido utilizar los métodos predefinidos en el lenguaje a usar.
S solo puede ser lowercase o UPPERCASE, no mixto.

Input 📥 
Un string S

Output
La primera linea dirá "Is Lowercase" o "Is Uppercase" dependiendo el caso.
La segunda y última línea, mostrará el texto en su contrario, ej, si es lowercase, lo mostrará como uppercase cumpliendo con lo que dice el enunciado.*/

const checkStringFormat = (S) => {
  const mapLetters = new Map(), result = []
  for (let i = 65, k = 97; i < 91 && k < 123; i++, k++) {
    const upperLetter = String.fromCharCode(i);
    const lowerLetter = String.fromCharCode(k)
    mapLetters.set(upperLetter, lowerLetter).set(lowerLetter, upperLetter)
  }
  const letterAscii = S.charCodeAt(0)
  letterAscii >= 65 && letterAscii < 91 ? console.log("Is Uppercase") : console.log("Is Lowercase")

  for (const letter of S) result.push(mapLetters.get(letter))
  console.log(S + " -> " + result.join("") + "\n")
}

const checkString = (s) => {
  const regex1 = /\(\)/gi
  const regex2 = /\[\]/gi
  while (s.match(regex1) || s.match(regex2)) s = s.replace(regex1, '').replace(regex2, '')
  return s ? "No" : "Yes"
}

const Maps = () => {
  const queriesCount = Number(prompt())
  const map = new Map();
  let i = 0, tpl = '';
  while (i < queriesCount) {
    const [type, student, mark] = prompt().split(' ')
    const markMap = map.get(student) || 0
    if (type === '1') map.set(student, (+mark) + markMap)
    if (type === '2') map.delete(student)
    if (type === '3') tpl += markMap + "\n"
    i++
  }
  console.log(tpl)
}

sums = s => s.split('+').map(Number).filter(f => f < 4 && f > 0).sort((a, b) => a - b).join('+')

function cows() {
  const T = +prompt("Nro. de casos:");
  let i = 0;
  while (i < T) {
    const N = +prompt("Nro. de puestos:");
    if (!(2 <= N && N <= 1e5))
      throw new RangeError("N must be 2<=N and N <= " + 1e5);
    const C = +prompt("Nro. de vacas:");
    if (!(2 <= C && C <= N)) throw new RangeError("C must be 2<=C and C <= N");

    let k = 0,
      max,
      minSeparacion,
      ubicaciones = [];
    while (k < N) {
      ubicaciones.push(+prompt(`Escriba la ubicacion nro. ${k + 1}`));
      k++;
    }
    max = Math.max(...ubicaciones);
    minSeparacion = Math.ceil(max / C);
    console.log(minSeparacion);
    i++;
  }
}

const batmansuperman = (i = 0) => {
  const N = +prompt("Nro. de compartimentos");
  const S = +prompt("Nro. de fragmentos");
  const F = [];
  while (i < N) {
    let compartimento;
    do {
      compartimento = +prompt(`Compartimento ${i + 1}`);
    } while (!compartimento);
    F[i++] = compartimento;
  }
  return Math.max(...F) / S;
};

function marble() {
  let i = 0;
  let flag = true;
  while (i < 65 && flag) {
    const N = +prompt("Numero de canicas");
    const Q = +prompt("Numero de consultas");

    const canicas = [];
    let k = 0;
    let x = 0;
    while (k < N) canicas.push(+prompt(`Nro de la canica ${k + 1}:`)), k++;
    canicas.sort().map(Number);

    while (x < Q) {
      const search = +prompt("Buscar canica");
      const index = canicas.indexOf(search);
      if (index >= 0)
        console.log(`CASE #${i + 1}\n${search} found at ${index+1}`);
      else console.log(`CASE #${i + 1}\n${search} not found`);
      x++
    }

    i++;
    if (!Q && !N) flag = false;

  }
}

function cuadrado(n) {
  const MAX_VALUE = n * n;
  const BOARD = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  const MIDDLE = Math.floor(n / 2);
  let x = 0;
  let y = MIDDLE;
  let currentN = 1;
  while (currentN <= MAX_VALUE) {
    BOARD[x][y] = currentN;
    // si estamos en la primera fila y sobrepasamos,
    if (x === 0) {
      if (y === n - 1) {
        x++;
      } else {
        x = n - 1; // pasamos hasta abajo (la ultima fila) !comprobar si en esa fila hay numero
        y++; // pasamos a la siguiente celda !comprobar si estamos en la ultima celda (n-1)
      }
    } else {
      x--;
      y++;
      // si no estamos en la primera fila pero al intentar colocar el numero en la celda diagonal
      // se sobre pasa de la matriz la pasamos al anterior fila
      if (y >= n) {
        y = 0;
        // si al intentar poner un numero en la celda diagonal, la misma se encuntra ocupada, lo ponemos debajo
      } else if (BOARD[x][y] !== 0) {
        x += 2;
        y--;
      }
    }
    currentN++;
  }
  BOARD.forEach((x) => {
    str = "";
    x.forEach((n) => (str += n + " "));
    console.log(str);
    str = "";
  });
  console.log("\n");
}

function goodSequence(n, sq, rm=0) {
  const sqc = sq
    .split(" ")
    .filter(Number)
    .sort()
    .reduce((p, c) => ({ ...p, [c]: c in p ? p[c] + 1 : 1 }), {});
  for (let [n, nr] of Object.entries(sqc)) {
    if (+n > nr) rm += nr;
    if (+n < nr) rm += nr - +n;
  }
  console.log(rm);
}
// goodSequence("5", "3 3 3 3"); // 1
// goodSequence("5", "2 4 1 4 2"); // 2
// goodSequence("6", "1 2 3 3 3 4 4 5 5 5 5 6 6"); // 9
// goodSequence("3", "3 3 3"); // 0
// goodSequence("1", "3"); // 1
// goodSequence("0", "");

const moviesFestival = () => {
  const n = +prompt("Cantidad de peliculas");
  const horas = [];
  let count = 1;
  for (let i = 0; i < n; i++) {
    let hora;
    do {
      hora = prompt(`Horas inicio-fin, pelicula: ${i + 1}/${n}`);
    } while (!hora);
    const numbers = hora.split(" ").map(Number);
    horas.push(numbers);
  }
  const sorted = horas.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  console.log([...sorted]);
  let minHoraInicio = sorted[0][1];
  sorted.splice(0, 1);
  let peliculaIndex = sorted.findIndex((ele) => ele[0] >= minHoraInicio);

  while (peliculaIndex > -1) {
    minHoraInicio = sorted[peliculaIndex][1];
    sorted.splice(peliculaIndex, 1);
    peliculaIndex = sorted.findIndex((ele) => ele[0] >= minHoraInicio)
    count++;
  }
  console.log(count);
};




//https://www.quora.com/What-is-the-possible-ways-of-distributing-10-identical-things-among-6-children
//https://math.stackexchange.com/questions/322120/why-is-cn-r-%E2%88%92-1-r-cn-r-%E2%88%92-1-n-%E2%88%92-1-specifically-why-is-r-equivale
/*let z = n => n == 1 || n==0 ? 1 : n * z(n - 1)
z = n=>{
  let res=1;
  while(n){
    res*=n--
  }
  return res;
}
let _ = (n,m, y=n+m-1) => (z(y)/(z(m-1) * z(y-(m-1))))*/

_ => (t, q, n = q + t - 1, r = t - 1, z = n => n == 1 || n == 0 ? 1 : n * z(n - 1)) => console.log(z(n) / (z(r) * z(n - r)))

let factorial = n => {
  let res = 1;
  while (n) {
    res *= n--
  }
  return res;
}

const distribucion = (ninos, manzanas) => {
  n = manzanas + ninos - 1;
  r = ninos - 1;
  const res = factorial(n) / (factorial(r) * factorial(n - r))
  console.log(res)
}


/*
Watermelonbook consiste en una red de amigos en línea, en la cual una persona se puede hacer amigo con otra persona. Los administradores de la página, al observar el éxito mundial de esta red social, se preguntan si es que habrá personas que puedan ser amigos indirectamnete, Para ello definen el concepto de la amistad por transitividad.

Si a es amigo con b y b es amigo con c, entonces a y c tienen una amistad por transitividad.

Tener en cuenta que si a es amigo de b, entonces b es amigo de a.

Para ello, los administradores se contactan con usted para realizar un programa que recibirá la información de una lista de amigos y luego recibirá una serie de consultas la cual consiste si es que un par de amigos tienen una amistad transitiva.


Input
La primera línea consiste en tres enteros n, e y q. Donde n corresponde a la cantidad de nodos en el grafo, e corresponde a la cantidad de aristas del grafo y q a la cantidad de consultas del problema.

Luego le siguen e líneas que contienen dos enteros cada una, a y b, que corresponden a los amigos entre sí de la red.

Y finalmente, le siguen q líneas que contienen dos enteros cada una, c y d, que corresponden a las personas que uno quieren saber si tienen una amistad transitiva o no.

Output
Por cada consulta debe mostrar por pantalla 1 o 0, donde 1 si es que tienen una amistad de transitiva y 0 si no.

Ejemplos
Input
3 2 2
0 1
1 2
0 2
0 1
Output
1
0
*/
function amigos() {
  const n = +prompt("n")
  const e = +prompt("e")
  const q = +prompt("q")
  const graph = new Map();
  let i = 0, k = 0, res = '';

  while (i < e) {
    const [v1, v2] = prompt(`vertexs: ${i + 1}`).split(' ').map(Number);
    graph.set(v1, [...(graph.get(v1) || []), v2]);
    graph.set(v2, [...(graph.get(v2) || []), v1]);
    i++;
  }

  while (k < q) {
    const [v1, v2] = prompt(`vertexs to check: ${k + 1}`).split(' ').map(Number);
    const v1tAdjacents = graph.get(v1);
    const v2tAdjacents = graph.get(v2);
    if (v1tAdjacents.some(vertex => v2tAdjacents.includes(vertex))) {
      res += "1\n"
    } else {
      res += "0\n"
    }
    k++;
  }
  console.log(res)
}

/*
29.- Removing Digits
Te dan un entero N. En cada paso, puedes restar uno de los dígitos del número.

¿Cuántos pasos se requieren para que el número sea igual a 0?

Input  
La única línea de entrada tiene un número entero n.

Output  
Imprime un entero: el número mínimo de pasos.

Restricciones: 1 <= n <= 10 elevado a la sexta.
*/
const rm = (n) => {
  const getMaxDigit = (m) => {
    let arr = [];
    while (m) {
      arr.push(m % 10);
      m = ~~(m / 10);
    }
    return Math.max(...arr);
  };
  let steps = 0;
  do {
    n = n - getMaxDigit(n);
    steps++;
  } while (n > 0);
  return steps;
};

console.time("rm 1")
console.log(rm("100000000"))
console.timeEnd("rm 1")

console.time("rm 2")
console.log(rm("10000000"))
console.timeEnd("rm 2")

console.time("rm 3")
console.log(rm("1000000"))
console.timeEnd("rm 3")

console.time("rm 4")
console.log(rm("100000"))
console.timeEnd("rm 4")

console.time("rm 5")
console.log(rm("10000"))
console.timeEnd("rm 5")


console.time("rm 6")
console.log(rm("1000"))
console.timeEnd("rm 6")


console.time("rm 7")
console.log(rm("100"))
console.timeEnd("rm 7")

console.time("rm 8")
console.log(rm("27"))
console.timeEnd("rm 8")









