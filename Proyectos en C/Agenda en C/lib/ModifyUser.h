void modificarUsuarioPorIndice(char, char[], char[], short);
void modificarUsuarioPorNombre(char);
void modificarUsuario();
void menu();
void modificarUsuario(){
    colorConsola();
    char opcion[3] = "";
    short repeat = 1;
    do{
        limpiarPantalla();
        escribir("\n\tAqui puede modificar los campos de los usuarios.\n\tSeleccione la forma de busqueda de un usuario:\n\t");
        printf("\n\t1-Nombre\n\t2-Apellido\n\t3-Edad\n\t4-Menu\n\t");
        borrarBuffer();
        gets(opcion);
        if(esnumero(opcion) && (strlen(opcion) == 1)){//si es un numero, y la longitud es 1 caracter entonces:
          switch((int)opcion[0]){
              case 49:
                  repeat = 0;
                  modificarUsuarioPorNombre('N');
              break;
              case 50:
                  repeat = 0;
                  modificarUsuarioPorNombre('A');
              break;
              case 51:
                  repeat = 0;
                  modificarUsuarioPorNombre('E');
              break;
              case 52:
                  repeat = 0;
                  menu();
              break;
              default:
                  repeat = 1;//solo usamos repeat aqui en tal caso que sea una opcion que no esta en el menu
              break;
          }
        }
    }while(repeat);
}
void modificarUsuarioPorNombre(char forma){
    short cantidad = cargarEstructura(), i, k = 0, encontrado = 0, ids[200] = {0};
    /*
        k = indice de los usuarios encontrados, guardados en el vectos ids[]
        i = usado para iterar a traves de la estructura basandonos en la cantidad
    */
    char _propiedad[20] = "", propiedadModificar[2] = "", idUser[4] = "", prop[20] = "";
    /*
        nombre: nombre que proporcionara el usuario para buscar en la estructura
        idUser: el indice del contacto a modificar, que va a colocar el usuario que supuestamente esta dentro de la estructura
        propiedadModificar: un entero que nos dice que cosa va  a modificar el usuario de X contacto
        prop : el valor de la propiedad a modificar
    */

    limpiarPantalla();
    if(forma == 'N'){
        do{
            limpiarPantalla();
            escribir("\n\tPor favor coloque el nombre de la persona (3 caracteres minimo)\n\ta buscar:\n\t");
            borrarBuffer();
            gets(_propiedad);
        }while(strlen(_propiedad) < 3);
        printf("\n\tPersonas encontradas por el nombre: %s\n\t", _propiedad);
        for(i = 0; i < cantidad; i++){
            if(strcmp(strlwr(contactos[i].nombre), strlwr(_propiedad)) == 0){
                printf("\n\tID: %d\n\tNombre: %s\n\tApellido: %s\n\t", i, contactos[i].nombre, contactos[i].apellido);
                printf("----------------------------------------------------------------------\n\n\t");
                ids[k++] = i; //guardamos la id(indice dentro de la estructura) para poder saber si existe la id que el usuario va a
                            //colocar en el programa
                encontrado++;
            }
        }
    }else if(forma == 'A'){
        do{
            limpiarPantalla();
            escribir("\n\tPor favor coloque el apellido de la persona (3 caracteres minimo)\n\ta buscar:\n\t");
            borrarBuffer();
            gets(_propiedad);
        }while(strlen(_propiedad) < 3);
        printf("\n\tPersonas encontradas por el apellido: %s\n\t", _propiedad);
        for(i = 0; i < cantidad; i++){
            if(strcmp(strlwr(contactos[i].apellido), strlwr(_propiedad)) == 0){
                printf("\n\tID: %d\n\tNombre: %s\n\tApellido: %s\n\t", i, contactos[i].nombre, contactos[i].apellido);
                printf("----------------------------------------------------------------------\n\n\t");
                ids[k++] = i; //guardamos la id(indice dentro de la estructura) para poder saber si existe la id que el usuario va a
                            //colocar en el programa
                encontrado++;
            }
        }
    }else if(forma == 'E'){
        do{
            limpiarPantalla();
            escribir("\n\tPor favor coloque la edad de la persona a buscar:\n\t");
            borrarBuffer();
            gets(_propiedad);
        }while(!esnumero(_propiedad));
        printf("\n\tPersonas encontradas por la edad: %s\n\t", _propiedad);
        for(i = 0; i < cantidad; i++){
            if(strcmp(strlwr(contactos[i].edad), strlwr(_propiedad)) == 0){
                printf("\n\tID: %d\n\tNombre: %s\n\tApellido: %s\n\t", i, contactos[i].nombre, contactos[i].apellido);
                printf("----------------------------------------------------------------------\n\n\t");
                ids[k++] = i; //guardamos la id(indice dentro de la estructura) para poder saber si existe la id que el usuario va a
                            //colocar en el programa
                encontrado++;
            }
        }
    }else{
        escribir("\n\tLa propiedad que el programa desea cambiar, no existe consulte al programador JAJA\n\t");
        pausarPantalla();
        modificarUsuario();
    }
    if(!encontrado)
        escribir("\n\tNo se encontro ningun contacto, intente de nuevo.\n\t");
    else{
        do{
            escribir("\n\tPor favor coloque la id del usuario que desea modificar:\n\t");
            borrarBuffer();
            gets(idUser);
        }while(strlen(idUser) < 1 || !esnumero(idUser));
        short idEncontranda = 0;
        for(i = 0; i < k; i++){//recorremos hasta la longitud de todas las ids[]
            if(ids[i] == atoi(idUser)){//si se encuentra la id proporcionada por el usuario, entonces el usuario existe
                idEncontranda = 1;//se encontro la id, entonces ya no seguimos iterando en las ids[]
                i = k + 1; //rompemos el ciclo
            }
        }
        if(idEncontranda){
            printf("\n\tLa id: %d, fue encontrada (%s %s).", atoi(idUser), contactos[atoi(idUser)].nombre,  contactos[atoi(idUser)].apellido);
            do{
                limpiarPantalla();
                escribir("\n\tQue desea modificar de este contacto?\n\t1-Nombre\n\t2-Apellido\n\t3-Cedula\n\t4-Edad\n\t5-Peso\n\t6-Telefono\n\t--->");
                borrarBuffer();
                gets(propiedadModificar);
            }while(strlen(propiedadModificar) < 1 || strlen(propiedadModificar) > 2 || !esnumero(propiedadModificar));
            switch((int)propiedadModificar[0]){
                case 49://1
                    do{
                        limpiarPantalla();
                        printf("\n\tEscriba el nuevo nombre para: %s %s (3 caracteres minimo)\n\t", contactos[atoi(idUser)].nombre,  contactos[atoi(idUser)].apellido);
                        borrarBuffer();
                        gets(prop);
                    }while(strlen(prop) < 3);
                    modificarUsuarioPorIndice('N', idUser, prop, cargarEstructura());
                break;
                case 50: //2
                    do{
                        limpiarPantalla();
                        printf("\n\tEscriba el apellido nombre para: %s %s (3 caracteres minimo)\n\t", contactos[atoi(idUser)].nombre,  contactos[atoi(idUser)].apellido);
                        borrarBuffer();
                        gets(prop);
                    }while(strlen(prop) < 3);
                    modificarUsuarioPorIndice('A', idUser, prop, cargarEstructura());
                break;
                case 51://3
                    do{
                        limpiarPantalla();
                        printf("\n\tLa cedula para: %s %s (debe ser numerica)\n\t", contactos[atoi(idUser)].nombre,  contactos[atoi(idUser)].apellido);
                        borrarBuffer();
                        gets(prop);
                    }while(!esnumero(prop));
                    modificarUsuarioPorIndice('C', idUser, prop, cargarEstructura());
                break;
                case 52: //4 
                    do{
                        limpiarPantalla();
                        printf("\n\tLa edad para: %s %s (debe ser numerica)\n\t", contactos[atoi(idUser)].nombre,  contactos[atoi(idUser)].apellido);
                        borrarBuffer();
                        gets(prop);
                    }while(!esnumero(prop));
                    modificarUsuarioPorIndice('E', idUser, prop, cargarEstructura());
                break;
                case 53://5
                    do{
                        limpiarPantalla();
                        printf("\n\tEl peso para: %s %s (debe ser numerica)\n\t", contactos[atoi(idUser)].nombre,  contactos[atoi(idUser)].apellido);
                        borrarBuffer();
                        gets(prop);
                    }while(comprobarPesoCorrecto(prop) );
                    modificarUsuarioPorIndice('P', idUser, prop, cargarEstructura());
                break;
                case 54: //6
                    do{
                        limpiarPantalla();
                        printf("\n\tEl telefono para: %s %s (debe ser numerica)\n\t", contactos[atoi(idUser)].nombre,  contactos[atoi(idUser)].apellido);
                        borrarBuffer();
                        gets(prop);
                    }while(!esnumero(prop) );
                    modificarUsuarioPorIndice('T', idUser, prop, cargarEstructura());
                break;
                default: escribir("\n\tOpcion invalida");
            }
        }else{
            printf("\n\tLa id: %d no existe entre la lista mostrada!\n\t", atoi(idUser));
        }
    }
    pausarPantalla();
    modificarUsuario();
};


//*FUNCION QUE MODIFICA A UN USUARIO ESPECIFICO A TRAVES A DE LA PROPIEDAD QUE SE VA A MODIFICAR, EL INDICE O ID, EL NUEVO VALOR DE LA PROPIEDAD Y LA CANTIDAD DE USUARIOS QUE HAY ACTUALMENTE
void modificarUsuarioPorIndice(char propiedad, char index[], char valor[], short i){
    //i : significa la cantidad de usuarios registrados
    //index: indice o id de la persona a eliminar
    short k = 0, indice = atoi(index);
    FILE * personas = NULL;
    personas = fopen("lib/contacts/contactos.txt", "w");
    if(personas != NULL){
        if(propiedad == 'N'){
            for(k = 0; k < i; k++){
                if(indice == k){//comprobamos que el indice pasado por parametro sea igual al de la estructura
                    fprintf(personas, "%s %s %s %s %s %s\n", valor, contactos[k].apellido, contactos[k].ci, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }else{
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }
            }
        }else if(propiedad == 'A'){
            for(k = 0; k < i; k++){
                if(indice == k){//comprobamos que el indice pasado por parametro sea igual al de la estructura
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, valor, contactos[k].ci, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }else{
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }
            }
        }else if(propiedad == 'C'){
            for(k = 0; k < i; k++){
                if(indice == k){//comprobamos que el indice pasado por parametro sea igual al de la estructura
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, valor, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }else{
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }
            }
        }else if(propiedad == 'E'){
            for(k = 0; k < i; k++){
                if(indice == k){//comprobamos que el indice pasado por parametro sea igual al de la estructura
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci, valor, contactos[k].peso, contactos[k].telefono);
                }else{
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }
            }
        }else if(propiedad == 'P'){
            for(k = 0; k < i; k++){
                if(indice == k){//comprobamos que el indice pasado por parametro sea igual al de la estructura
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci,contactos[k].edad, valor, contactos[k].telefono);
                }else{
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }
            }
        }else if(propiedad == 'T'){
            for(k = 0; k < i; k++){
                if(indice == k){//comprobamos que el indice pasado por parametro sea igual al de la estructura
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci,contactos[k].edad, contactos[k].peso, valor);
                }else{
                    fprintf(personas, "%s %s %s %s %s %s\n", contactos[k].nombre, contactos[k].apellido, contactos[k].ci, contactos[k].edad, contactos[k].peso, contactos[k].telefono);
                }
            }
        }else{
            escribir("\n\tLa propiedad que el programa desea cambiar, no existe consulte al programador JAJA\n\t");
            pausarPantalla();
            modificarUsuario();
        }
        fclose(personas);
        printf("\n\tEl contacto %s %s fue modificado con exito\n\t", contactos[indice].nombre, contactos[indice].apellido);
    }else{
      colorConsolaError();
      escribir("\n\tOcurrio un error al leer el archivo \"lib/contacts/contactos.txt\" verifique su existencia\n\t");
      pausarPantalla();
      modificarUsuario();
    }
};
