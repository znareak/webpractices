
class Nodo{
    constructor(valor, siguiente){
        this.valor = valor;
        this.siguiente = siguiente;
        this.tope = null;
        this.count = 0;
    }

    Push(dato){
        const aux = new Nodo(dato, this.tope);
        this.tope = aux;
        this.count++;
    }
    
    Pop(){
        if (tope == null) {
            return new Error('Pila vacia');
        }
        this.tope = this.tope.siguiente;
        this.count--;
    }
    Count(){
        return this.count;
    }

    Print(){
        if(this.tope == null){ 
            return new Error('Pila vacia');
        }

        const aux = this.tope;
        while(aux != null){
            console.log(aux.valor);
            aux = aux.siguiente;
        }
    }
}

let tope = null;//la inicializamos con nada

function Push(dato){
    //              Valor    Guardar el otro nodo (para no peder informacion)  y crear un enlace
    let aux = new Nodo(dato, tope);//creamos un nuevo nodo y guardamos la referencia del nodo anterior (tope)
    //hay que tener en cuenta que guardamos el valor que tiene actualmente tope en la instancia de Nodo
    //en el nuevo nodo creado, esto se hace porque mas adelante en el codigo se sobreescribe tope por el 
    //nuevo nodo que se inserta, asi no perdemos el valor que tenia tope luego de haber insertado un nuevo nodo
    //con esto lo que hacemos es un conjunto de valores que cada uno apuntan a un nodo que era antes el tope de la pila

    tope = aux;//ahora el ultimo es aux porque lo acabamos de insertar
    //tope siempre sera el ultimo elemento que se inserta, porque siempre sobreescribimos el valor que tenia tope
    //por el valor que se acaba de insertar (aux), y el primero se desplazando al final mientras se meta mas nodos
}

function Pop(){
    if(tope == null){//comprobamos que la pila esta vacia
        return new Error('Pila vacia');
    }
    //sobreescribimos el tope de la pila, para pasar al siguiente elemento

    //sobreescrbimos el ultimo elemento, con el elemento que le sigue, asi pasamos al otro nodo
    tope = tope.siguiente; //pasamos al siguiente elemento, omitiendo el que estaba actualmente
    
}

function Count(){
    if(tope == null) return 0

    let contador = 0;
    let aux = tope;
    while(aux != null){//mientras no lleguemos al final, habra mas nodo que contar
        aux = aux.siguiente;
        contador++;
    }
    return contador;
}

function Print(){
    if(tope == null) return new Error('Pila vacia');

    let aux = tope;//hacemos una variable auxliar que contenga la pila, para no modificar la pila original
    while(aux != null){
        console.log(aux.valor);

    //pasamos al siguiente nodo, por esta razon se guardo la referencia del nodo anterior cuando se inserta un nuevo nodo
    //para ir pasando por los nodos anteriores creados, con solo meterlo en una variable (siguiente)
        aux = aux.siguiente;//actualizamos el nodo con el que estamos trabajando
    }
}

/*function PushBefore(value, dato){
    if(tope == null){
        return new Error('Pila vacia');
    }
    let aux = tope; //creamos una copia de aux, para luego modificarla toda y asignarla como nueva pila 
    while(aux != null){
        if(value == aux.valor){
        //[1, 2, 3, 4, 5]
        //nuevo es el nuevo nodo o elemento que se va insertar exactamente en esta iteracion ya que la propiedad siguiente
        //siempre va a apuntar a diferentes nodos dependiendo de donde se este iterando. Bien el nuevo nodo se inserta
        //en dicha iteracion, guardamos el nodo que viene despues del nodo que esta en esta iteracion(aux.siguiente) 
        //para seguir conservando la linea de apuntadores
            let nuevo = new Nodo(dato, aux.siguiente);
            
            aux = nuevo;
            //Luego le decimos al Nodo en el cual se esta iterando actualmente sera el nuevo 
            //nodo que se acaba de crear, y ese nuevo nodo que se acaba de crear apunta al siguiente nodo que tenia el
            //antiguo nodo que se inserto antes del nodo que tenia asignado aux, antes de sobreescribirse
        }
        aux = aux.siguiente;//aux.siguiente viene siendo lo mismo que (nuevo.siguiente)
    }//while
    console.log(aux);
}*/

function GetTop(){
    return tope; //retornamos el ultimo elemento de la pila
}

