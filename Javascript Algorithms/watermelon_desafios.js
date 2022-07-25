
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
