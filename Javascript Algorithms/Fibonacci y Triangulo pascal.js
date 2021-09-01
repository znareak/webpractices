
let n = [0, 1];
for(i =2; i < 50; i++ ){
    n[i] = n[i-2] + n[i-1];
}

let numero1 = 1, numero2 = 2, suma = 0;

        //2 3 5 8 ...
for(i=1; i < 50; i++){
    console.log(numero1);//muestro el primer numero (1)

    suma = numero1 + numero2;// 2 + (3) = 5     (3) + 5 ...
    //sumo los 2 numeros, el anterior al numero numero2, porque así es la ecuación

    numero1 = numero2;//luego el numero1 va hacer el numero que va detras del numero que se 
    //genero gracias a la suma de numero1 + numero2

    numero2 = suma;
    //actualizamos el numero2 para que se sume el resultado de la variable suma que contiene
    //al numero que va delante de numero1
}



/*
    VARIABLES:
    index = indica una fila para operar con ella
    next = puede indicar 2 valores:
        1-El numero anterior que se sumara con el siguiente
        2-El numero siguiente que se sumara con el anterior
    filas = cantidad de filas que se mostrara del triangulo
    acc = cantidad de filas actuales que se han mostrado
    n = arreglo que contiene las filas del triangulo
    aux = variable temporal que contiene una filas sucesiva del triangulo

*/
let i = 0, index = 0, filas = 20, acc =0;
let n = [[1]]; //[1, 4, 6, 4, 1]
let aux = [], next = 0;
while(acc < filas){//repetiremos todo mientras no se haya alcanzado el numero de filas deseado a mostrar
    aux.push(1)//se agrega un 1 en cada filas
        while(i < n[index].length - 1){//repetiremos mientras no alcancemos la cantidad de elementos que tiene esa fila
            //console.log(n[index]); si desees debuggear la fila con la que actualmente se opera
            console.log(i)
            aux.push(n[index][next] + n[index][++next]);//sumamos, un numero, con su siguiente
            i++;//aumentamos un elemento añadido a la  fila[index]
        }
    n.push(aux);//agregamos la fila al triangulo
    aux.push(1);//se agrega 1 en cada final de una fila

    aux = [];//reseteamos la variable auxiliar para usarse para la siguiente fila
    index++;//aumentamos el index es decir pasamos a la siguiente fila
    next=0;//reseteamos los numeros operandos de la fila ya que trabajaremos con otra fila
    acc++;//aumentamos una fila mostrada
    i=0;//reseteamos el acumulador que indica la cantidad de numeros que tiene cada fila
}
function mostrar(){
    let htmlTemplate = '<ul style="list-style:none;">';
    for(let i = 0; i < n.length; i++){
        htmlTemplate += '<li>';
		
        htmlTemplate += n[i].join('  ');
        htmlTemplate += '</li>';
    }
    htmlTemplate += '</ul>';
    document.body.innerHTML += htmlTemplate;
}
mostrar();