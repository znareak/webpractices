(function(w, d){
    let shift = false;
    let errorSintaxis = false;
    let expresion = document.getElementById('operaciones');
    const comprobarLetras = () => {
        if( (/[a-zA-Z]+|\n+|\r+|\s+/ig).test(expresion.value) ){
            expresion.value = expresion.value.replace(/[a-zA-Z]+|\n+|\r+|\s+/ig, '');
        }
    }

    // FUNCIONES QUE CONLLEVAN COMPROBACIONES --------
    const logaritmoln = a => {
        if(a <= 0){
            mostrarError();
            return;
        }
        return Math.log(a);
    }
    const raiz = a => {
        if(a < 0){
            mostrarError();
            return;
        }
        return Math.sqrt(a);
    }
    const elevado = (a, b) => {
        if(b < 0){
            mostrarError();
            return;
        }

        if(b === 0){
            return 1;
        }

        return Math.pow(a, b);
    }
    const logaritmo = a => {
        if(a <= 0){
            mostrarError();
            return;
        }
        return Math.log10(a);
    }
    // --------------------------

    const hipotenusa = (...args) => Math.hypot(args);
    const botonesGenericos = [...document.querySelectorAll('.calculadora .botones .filas')];
    const limpiarPantalla = () => document.getElementById("operaciones").value = "";
    const mostrarError = () => {
        document.getElementById("operaciones").value = "Error de sintaxis.";
        errorSintaxis = true;
    }
    /*
        funcionesTrigonometricas proporciona un resultado dependiendo de patrones encontrados en una cadena
        patron1 - patron principal para encontrar la formula matematica
        patron3 - patron para removerle los parentesis al numero
        callback - funcion a ejecutar para dar un resultado 
        input HTMLElement donde se mostraran los resultados
        func - es una palabra clave, que se usa en una expresion regular para reemplazar coincidencias con el resultado
        patron2 - es una expresion para extraer la cantidad a evaluar y aplicar la callback
    */
    const funcionesTrigonometricas = (patron1, patron3, callback, input , func, patron2 = /\(-{0,1}\d+(\.\d+)*\)/) => {
        // agarro toda la expresion matematica
        const value = expresion.value; 

        // tomo la cadena con el patron
        const problemaExpresion = value.match(patron1); //expresion regular basica
        console.log(problemaExpresion);

        let coincidenciasRealizadas = 0; // como problemaExpresion es un arreglo, debo asegurarme de realizar
                                        //todas las potencias

        while(coincidenciasRealizadas < problemaExpresion.length){
            let cantidad = problemaExpresion[coincidenciasRealizadas].match(patron2);
                cantidad = eval(+cantidad[0].replace(patron3, ''));
                console.log("cantidad:", cantidad);
            const resultado = callback(cantidad);
            
            input.value = input.value.replace(`${func}(${cantidad})`, resultado);
            
            coincidenciasRealizadas++;
        }    
    }
    const notacionCientifica = (patron1, callback, input, func = true) => {
        const value = expresion.value; 

        // tomo los patrones existentes a^(2) en la cadena
        const problemaExpresion = value.match(patron1); // expresion regular basica
        console.log(problemaExpresion)
        let coincidenciasRealizadas = 0; // como problemaExpresion es un arreglo, debo asegurarme de realizar
                                            //todas las potencias

        while(coincidenciasRealizadas < problemaExpresion.length){
            let exponente = null;
            if(!func){
                exponente = problemaExpresion[coincidenciasRealizadas].match(/\(-{0,1}\d+(\.\d+)*\)/);
                exponente = eval(+exponente[0].replace(/\(|\)/gi, ''));
            }
            
            const base = +problemaExpresion[coincidenciasRealizadas].split('^')[0];
            console.log("base: " ,base);
            console.log("exponente: ", exponente ? exponente : "2");
                                    //si func es true se usara la potencia al cuadrado de lo contrario, se usara base y exponente
            input.value = input.value.replace(func ? `${base}^(2)` : `${base}^(${exponente})`, 
                                              func ? callback(base, 2) : callback(base, exponente));    
            coincidenciasRealizadas++;
        } 
    }
    const comprobarPatrones = () =>{
        expresion = document.getElementById('operaciones');

        // comprobar si existen caracteres { } [ ] reemplazarlos por parentesis
        if( (/{|\[|\[/ig).test(expresion.value) ){
            expresion.value = expresion.value.replace(/\{|\[/ig, '(');
        }

        if( (/}|\]/ig).test(expresion.value) ){
            expresion.value = expresion.value.replace(/\}|\]/ig, ')');
        }

        

        // compruebo si existe cos(n)
        if((/cos\(-{0,1}\d+(\.\d+)*\)/ig).test(expresion.value)){
            console.log('expresion cos(n) detectada')
            funcionesTrigonometricas(/cos\(-{0,1}\d+(\.{0,1}\d+)*\)/ig, /\(|\)/gi, Math.cos, expresion, 'cos');
        }

        // compruebo si existe sin(n)
        if((/sin\(-{0,1}\d+(\.\d+)*\)/ig).test(expresion.value)){
            console.log('expresion sin(n) detectada')
            funcionesTrigonometricas(/sin\(-{0,1}\d+(\.{0,1}\d+)*\)/ig, /\(|\)/gi, Math.sin, expresion, 'sin'); 
        }

        // compruebo si existe tan(n)
        if((/tan\(-{0,1}\d+(\.\d+)*\)/ig).test(expresion.value)){
            console.log('expresion tan(n) detectada')
            funcionesTrigonometricas(/tan\(-{0,1}\d+(\.{0,1}\d+)*\)/ig, /\(|\)/gi, Math.tan, expresion, 'tan'); 
        }

        // compruebo si existe ln(n)
        if((/ln\(-{0,1}\d+(\.\d+)*\)/ig).test(expresion.value)){
            console.log('expresion ln(n) detectada')
            funcionesTrigonometricas(/ln\(-{0,1}\d+(\.{0,1}\d+)*\)/ig, /\(|\)/gi, logaritmoln, expresion, 'ln');   
        }

        // compruebo si existe log(n)
        if((/log\(-{0,1}\d+(\.\d+)*\)/ig).test(expresion.value)){
            console.log('expresion log(n) detectada')
            funcionesTrigonometricas(/log\(-{0,1}\d+(\.{0,1}\d+)*\)/ig, /\(|\)/gi, logaritmo, expresion, 'log');       
        }

        // comprobar cuando el usuario teclea, si es caracteres, espacios y saltos de lineas
        comprobarLetras();
        
        // comprobar si existe √(±n)
        if((/√\(-{0,1}\d+(\.\d+)*\)/ig).test(expresion.value)){
            console.log('expresion √(±n) detectada')
            funcionesTrigonometricas(/√\(-{0,1}\d+(\.{0,1}\d+)*\)/ig, /\(|\)/gi, raiz, expresion, '√', /-{0,1}\d+(\.\d+)*/ig);
       
        }
        
        // compruebo si existe a^(2)
        if((/-{0,1}\d+\^\(2\)/ig).test(expresion.value)){
            console.log('expresion a^(2) detectada');
            notacionCientifica(/-{0,1}\d+\^\(2\)/ig, elevado, expresion);
        }

        // compruebo si existe a^(±b)
        if((/-{0,1}\d+\^\(-{0,1}\d+(\.\d+)*\)/ig).test(expresion.value)){
            console.log('expresion a^(b) detectada')
            notacionCientifica(/-{0,1}\d+\^\(-{0,1}\d+(\.{0,1}\d+)*\)/ig, elevado, expresion, false);
        }

        //Comprobar si existe valor absolte ||
        if(_expresion = expresion.value.match(/\|-{0,1}\d+(\.{0,1}\d+)*\|/ig) ){ 
            console.log("expresion de absoluteo |x| detectada", _expresion)
            
            for(const producto of _expresion){
                let reemplazar = +producto.replace(/\|/gi, '')
                expresion.value = expresion.value.replace(`${producto}`, Math.abs(reemplazar));
            }
        }

        /* comprobar una multiplicacion por parentesis (SE ACEPTAN NUMEROS NEGATIVOS) ejemplo:
            3(...     --> 3*(...
            23.1(...  --> 23.1*(...
        */
       if(_expresion = expresion.value.match(/-{0,1}\d+(\.{0,1}\d+)*\(/ig) ){ 
        console.log("expresion de producto n(... detectada", _expresion)
        
        for(const producto of _expresion){
            let reemplazar = producto.split('')
                reemplazar = `${reemplazar[0]}*${reemplazar[1]}`;
            expresion.value = expresion.value.replace(`${producto}`, reemplazar);
        }
    }

        /* comprobar una multiplicacion por parentesis (NO SON ACEPTADOS NUMEROS NEGATIVOS) ejemplo:
            ...)3     --> ...)*3
            ...)23.1  --> ...)*23.1 
        */
    if(_expresion = expresion.value.match(/\)\d+(\.{0,1}\d+)*/ig) ){ 
            console.log("expresion de producto ...)n detectada", _expresion)
            
            for(const producto of _expresion){
                let reemplazar = producto.split(')')
                    console.log(reemplazar)
                    reemplazar = `)${reemplazar[0]}*${reemplazar[1]}`;
                expresion.value = expresion.value.replace(`${producto}`, reemplazar);
            }
        }

        /* comprobamos si existe un producto no declarado por un * ejemplo:
            (3)(30) = 90     --> 3 * 30 = 90
            (6)(-4) = -24    --> 6 * -4 = -24

            buscamos un patron de  un numero seguido de un ( por toda la cadena
            match nos regresara un arreglo con todo las concidencias.

            Luego reemplazamos esas coincidencias con un nuevo patron: n * ( ....
            es decir un numero multiplicando un parentesis
            
        */
       if(_expresion = expresion.value.match(/(\(-{0,1}\d+(\.\d+)*\)\(-{0,1}\d+(\.\d+)*\))+/ig) ){ 
           console.log("expresion (x)(x)... detectada", _expresion)
            for(const producto of _expresion){
                const reemplazar = producto.replace(/\)\(/gi, '*');
                console.log(reemplazar)
                expresion.value = expresion.value.replace(`${producto}`, reemplazar);
            }
        }
    }

    for (const fila of botonesGenericos) {
        fila.addEventListener('click', e => {
            expresion = document.getElementById('operaciones');
            const tipo = e.target.getAttribute('tipo');

            // comprobamos si existe un mensaje de error, lo borramos en tal caso
            if(errorSintaxis){
                limpiarPantalla();
                errorSintaxis = false;
            }else{
                console.log(e.target.innerText)
                if(tipo == "operacion" && e.target.innerText == "=" && expresion.value){
                    try{
                        comprobarPatrones();
                        console.log(expresion.value)
                        const resultado = eval(expresion.value);
                        document.getElementById('resultado').innerHTML = resultado != undefined 
                                                                         ? `Resultado: <span class='numero'>${resultado}</span>`
                                                                         : "Esperando expresiones..."
    
                    }catch(e){
                        mostrarError();
                        errorSintaxis = false;
                        document.getElementById('resultado').innerHTML = `<span class='error' style='display:block; text-align:rigth'>
                                                                                Verifique la expresión.
                                                                            </span>`;
                    }
                }else if(tipo == "numero"){
                    expresion.value += e.target.innerText;
    
                }else if(tipo == 'operacion' && e.target.innerText == '+'){
                    expresion.value += '+';
    
                }else if(tipo == 'operacion' && e.target.innerText == '-'){
                    expresion.value += '-';
    
                }else if(tipo == 'operacion' && e.target.innerText == 'x'){
                    expresion.value += '*';
    
                }else if(tipo == 'operacion' && e.target.innerText == '÷'){
                    expresion.value += '/';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'DEL'){
                    if(expresion.value.length > 0){
                        expresion.value = expresion.value.substring(0, expresion.value.length - 1 );
                    }
    
                }else if(tipo == 'funcion' && e.target.innerText == 'AC'){
                    limpiarPantalla();
    
                }else if(tipo == 'operacion' && e.target.innerText == '('){
                    expresion.value += '(';

                }else if(tipo == 'operacion' && e.target.innerText == ')'){
                    expresion.value += ')';
    
                }else if(tipo == 'operacion' && e.target.innerText == 'x10x'){
                    expresion.value += '*10^()';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'a/b'){
                    expresion.value += 'a/b';
    
                }else if(tipo == 'funcion' && e.target.innerText == '√'){
                    expresion.value += '√()';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'x2'){
                    expresion.value += 'a^(2)';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'x□'){
                    expresion.value += 'a^(b)';
    
                }else if(tipo == 'operacion' && e.target.innerText == '.'){
                    expresion.value += '.';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'log'){
                    expresion.value += 'log()';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'ln'){
                    expresion.value += 'ln()';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'tan'){
                    expresion.value += 'tan()';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'sin'){
                    expresion.value += 'sin()';
    
                }else if(tipo == 'funcion' && e.target.innerText == 'cos'){
                    expresion.value += 'cos()';
    
                }else if(tipo == 'funcion' && e.target.innerText == '|x|'){
                    expresion.value += '|x|';
    
                }
            }
        })
    }
})(window, document);