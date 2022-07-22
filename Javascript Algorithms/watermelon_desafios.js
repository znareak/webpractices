
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
