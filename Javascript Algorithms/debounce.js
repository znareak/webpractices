// debounce hecho por libardo respondiendo cuestionario de js
// https://blog.webdevsimplified.com/2025-08/javascript-interview-questions/

// se crea una funcion clousure para guardar el scope de la variable id
// y tambien para retornar un wrapper para llamar la funcion con delay
const debounce = (fn, ms) => {
  let id; 
  
  // ...args porque no se sabe cuantos argumentos tiene el callback `fn`
  // por lo que recibimos la cantidad de argumentos que sea con el rest operator
  return (...args) => {

    // ya que guardamos la variable id en el scope local, se puede comprobar
    // si anteriormente se ha invocado el callback, por lo que evitamos que se llame
    // nuevamente, esto es clave porque solo ejecutamos el timeout una vez, cancelando
    // el anterior timeout creado
      if (id) {
        window.clearTimeout(id)
      }
      
     
    // creamos un nuevo timeout y le pasamos los parametros sin necesidad de un contexto
    // con bind y el delay
    id = setTimeout(fn.bind(undefined, ...args ), ms);
  }
}

function test (){
  console.log("Hola")
}


const fn = debounce(test, 600);

fn()
fn()
fn()
fn()
fn()
fn()
