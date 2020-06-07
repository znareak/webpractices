"use strict";
(() => {
    window.onload = e => {
        const btnMenu = document.querySelector('.principal .secundario h2 label i');
        const statusBtn = {
            BARRAS : 'fa-bars',
            CERRAR : 'fa-window-close'
        };
        let closed = false; // el menu esta cerrado por default

        btnMenu.addEventListener('click', function(e){

            if(!closed){// si NO esta cerrado (abierto), entonces añadimos la opcion de cerrar

                // comprobamos si las barras del menu estan en el boton
                if(this.classList.contains(statusBtn.BARRAS)){
                    this.classList.remove(statusBtn.BARRAS);
                }
                //añadimos la opcion de cerrar
                this.classList.add(statusBtn.CERRAR);
                closed = true;// el menu esta abierto

            }else{

                if(this.classList.contains(statusBtn.CERRAR)){
                    this.classList.remove(statusBtn.CERRAR);
                }
                this.classList.add(statusBtn.BARRAS);
                closed = false;
            }
        }, false);
    }
})()