(function(w, d){

    let number = null;
    let intentos = null;
    let activeClass = 'azul';

    const log = d.getElementById('logeador');
    const try_ = d.getElementById('intentar');
    const colors = d.querySelector('.colores');
    const alert = d.querySelector('.alerta');

    const logConsole = text => {
        const textNode = `<span class='hora'>[${new Date().toLocaleTimeString()}]</span>-> ${text}\n`;
        log.innerHTML += textNode;
    }


    const showGame = () => {
        intentos = 6;
        d.getElementById('cantidad').innerText = `Intentos: 6`;
        d.getElementById('intentar').disabled = false;
        d.querySelector('.consola').style.display = 'block';
        logConsole(`Calculando un número (<span class='numero'>1</span>-<span class='numero'>20</span>)...`);

        number = Math.ceil(Math.random() * 20);
        logConsole('Hecho.');
        logConsole('A continuación escriba un numero.');
    }


    const ok = d.getElementById('ok');
    ok.addEventListener('click', e =>{
        d.querySelector('.contenedor').removeChild(alert);
        showGame();
    })

    const clearConsole = () =>{
        logConsole(`Se reiniciara el juego en <span class='numero'>3</span> segundos...`)
        let seconds = 3;

        const idInterval = setInterval(() => {
            if(seconds == 0){
                d.getElementById('logeador').innerText = '';
                showGame();
                clearInterval(idInterval);
            }else{
                logConsole(`<span class='numero'>${seconds--}</span>`);
            }
        }, 1000);

    }

    try_.addEventListener('click', function(){
        intentos--;
        const inputNumber = +d.getElementById('numero').value;
        d.getElementById('cantidad').innerText = `Intentos: ${intentos}`;

        if(intentos == 0){
            logConsole('Se han agotados los intentos, vuelve a jugar de nuevo.');
            d.getElementById('intentar').disabled = true;
            clearConsole();

        }else if(inputNumber === number){
            logConsole('-------------------------------------');
            logConsole('¡Enhorabuena has adivinado el número!');
            logConsole('-------------------------------------');
            clearConsole();
            this.disabled = true;

        }else if(inputNumber > number){
            logConsole(`El número <span class='numero'>${inputNumber}</span> es mayor que el número secreto`);

        }else{
            logConsole(`El número <span class='numero'>${inputNumber}</span> es menor que el número secreto`);
        }
    })


    colors.addEventListener('click', function(e){
        switch(e.target.className){

            case "marron" : 
                d.querySelector(`.colores .${activeClass}`).classList.remove('selected');
                d.body.className = 'marron';
                d.body.querySelector('.marron').classList.add('selected');
                activeClass = "marron";
                if(alert){
                    alert.style.backgroundColor = '#641a24';
                }
            break;

            case "oscuro" : 
                d.querySelector(`.colores .${activeClass}`).classList.remove('selected');
                d.body.className = 'oscuro';
                d.body.querySelector('.oscuro').classList.add('selected');
                activeClass = "oscuro";
                if(alert){
                    alert.style.backgroundColor = 'rgba(0, 0, 0, 0.88)';
                }
            break;

            case "azul" : 
                d.querySelector(`.colores .${activeClass}`).classList.remove('selected');
                d.body.className = 'azul';
                d.body.querySelector('.azul').classList.add('selected');
                activeClass = "azul";
                if(alert){
                    alert.style.backgroundColor = '#0a3c68';
                }
            break;

            case "verde" : 
                d.querySelector(`.colores .${activeClass}`).classList.remove('selected');
                d.body.className = 'verde';
                d.body.querySelector('.verde').classList.add('selected');
                activeClass = "verde";
                if(alert){
                    alert.style.backgroundColor = 'rgb(0, 92, 92)';
                }
            break;

            case "fucsia" : 
                d.querySelector(`.colores .${activeClass}`).classList.remove('selected');
                d.body.className = 'fucsia';
                d.body.querySelector('.fucsia').classList.add('selected');
                activeClass = "fucsia";
                if(alert){
                    alert.style.backgroundColor = 'rgb(133, 14, 72)';
                }
            break;

            case "rojo" : 
                d.querySelector(`.colores .${activeClass}`).classList.remove('selected');
                d.body.className = 'rojo';
                d.body.querySelector('.rojo').classList.add('selected');
                activeClass = "rojo";
                if(alert){
                    alert.style.backgroundColor = 'rgb(104, 8, 39)';
                }
            break;
        }

    }, true)
})(window, document);