void eliminarUsuario();
void eliminarPorNombre(short);
void eliminarPorApellido(short);
void eliminarPorEdad(short);
void menu();

void eliminarUsuario(){
  short repeat = 1;
  do{
    char opcion[] = "";
    do{
      colorConsola();
    	limpiarPantalla();
    	escribir("\n\tAca puede eliminar usuarios dependiendo de su forma de busqueda\n\tPuede buscar de la siguiente forma:\n\t");
    	escribir("\n\t1-Por nombre\n\t2-Por Apellido\n\t3-Por edad\n\n\t6-Ir al menu principal\n");
    	printf("\t--->");
    	scanf("%s",&opcion);
    }while(!esnumero(opcion) || strlen(opcion) > 1);
    short usuariosRegistrados = cargarEstructura();
  	switch((int)opcion[0]){
  		case 49 : 
  			repeat = 0;
  			//printf("\n\tPaso del parametro: %d\n\t", usuariosRegistrados);
  			eliminarPorNombre(usuariosRegistrados);
  		break;
  	  case 50: 
  			repeat = 0;
  			eliminarPorApellido(usuariosRegistrados);
  	  break;
  		case 51: 
  		  repeat = 0;
  			eliminarPorEdad(usuariosRegistrados);
  		break;
  		case 54: 
  			repeat = 0;
  			menu();
  			break;
  		default:
        repeat = 1;
  	}
  }while(repeat);
}
void eliminarPorNombre(short longitud){
  char nombre[20] = "", idUser[4] = "";
  short i = 0, j=0, k = 0, x = 0, encontrado = 0, ids[200] ={0}, eliminado = 0;//suponemos que no se encontro ningun contacto
  //i: indice de los contactos encontrados
  //j: indice de las ids almacenada en ids[200]
  //x: es usado para meter los contactos que no seran eliminados
  do{
  limpiarPantalla();
  //printf("\n\tLongitud: %d\n\t", longitud);
  escribir("\n\tRecuerde que la longitud minima de un nombre es de 3 caracteres.\n\tColoque el nombre del contacto a eliminar:\n\t");
  borrarBuffer();
  gets(nombre);
  }while(strlen(nombre) < 3);
  printf("\n\n\tContactos encontrados por el nombre: %s:\n\t----------------------------------------------------------------------\n\t", nombre);
  for(i = 0; i < longitud; i++){
    if(strcmp(strlwr(contactos[i].nombre), strlwr(nombre)) == 0){
      printf("Nombre: %s %s      id: %d\n\t", contactos[i].nombre, contactos[i].apellido, i);
      ids[j++] = i;
      encontrado = 1;
    }
  }
  if(!encontrado) printf("No se encontro ningun contacto con el nombre: %s\n\n\t", nombre);
  else{
    escribir("----------------------------------------------------------------------");
    do{
      escribir("\n\tColoque la id del contacto que desea eliminar:\n\t");
      borrarBuffer();
      gets(idUser);
    }while(strlen(idUser) < 1 || !esnumero(idUser));
    FILE * contactosPersonas = NULL;
    contactosPersonas = fopen("lib/contacts/contactos.txt", "w");
    if(contactosPersonas != NULL && contactosPersonas != 0){
      for(k = 0; k < j; k++){
        if(ids[k] == atoi(idUser)){//compruebo que la id en la posicion k dentro de ids[]  sea igual a la id que proporciono el usuario
          printf("\n\tLa id: %d fue encontrada\n\t", atoi(idUser));
          for(x = 0; x < longitud; x++){
            if(x != ids[k]){//voy escribiendo en el archivo todos los contactos, excepto aquel
              //cuya id sea igual a la id que esta almacenada en la posicion k, la cual coincidio con la id proporcionada por el usuario
              fprintf(contactosPersonas, "%s %s %s %s %s %s\n", contactos[x].nombre, contactos[x].apellido, contactos[x].ci, contactos[x].edad, contactos[x].peso, contactos[x].telefono);
            }
          }
          eliminado = 1;
        }
      }
      if(eliminado)
        printf("\n\tLa persona: %s %s fue eliminada \n\t", contactos[atoi(idUser)].nombre, contactos[atoi(idUser)].apellido);
      else{
        //VOLVEMOS A ESCRIBIR TODO PORQUE CUANDO ABRI EL ARCHIVO EN MODO W, BORRÉ TODO POR ESO ESCRIBO TODO DESDE LA ESTRUCTURA CARGADA CON LOS
        //DATOS ANTERIORES DEL ARCHIVO
        printf("\n\tLa id que usted coloco no existe\n\t");
        for(x = 0; x < longitud; x++){
          fprintf(contactosPersonas, "%s %s %s %s %s %s\n", contactos[x].nombre, contactos[x].apellido, contactos[x].ci, contactos[x].edad, contactos[x].peso, contactos[x].telefono);
        }
      }
      fclose(contactosPersonas);
    }else{
      colorConsolaError();
      escribir("\n\tOcurrio un error al leer el archivo \"lib/contacts/contactos.txt\" verifique su existencia\n\t");
      pausarPantalla();
      eliminarUsuario();
    }
  }
  escribir("\n\t");
  pausarPantalla();
  eliminarUsuario();
}
/*

        BORRAR POR APELLIDO FUNCION
        
*/
void eliminarPorApellido(short longitud){
  char apellido[20] = "", idUser[4] = "";
  short i = 0, j=0, k = 0, x = 0, encontrado = 0, ids[200] ={0}, eliminado = 0;//suponemos que no se encontro ningun contacto
  //i: indice de los contactos encontrados
  //j: indice de las ids almacenada en ids[200]
  //x: es usado para meter los contactos que no seran eliminados
  do{
  limpiarPantalla();
  //printf("\n\tLongitud: %d\n\t", longitud);
  escribir("\n\tRecuerde que la longitud minima de un apellido es de 3 caracteres.\n\tColoque el apellido del contacto a eliminar:\n\t");
  borrarBuffer();
  gets(apellido);
  }while(strlen(apellido) < 3);
  printf("\n\n\tContactos encontrados por el apellido: %s:\n\t----------------------------------------------------------------------\n\t", apellido);
  for(i = 0; i < longitud; i++){
    if(strcmp(strlwr(contactos[i].apellido), strlwr(apellido)) == 0){
      printf("Nombre: %s %s      id: %d\n\t", contactos[i].nombre, contactos[i].apellido, i);
      ids[j++] = i;
      encontrado = 1;
    }
  }
  if(!encontrado) printf("No se encontro ningun contacto con el apellido: %s\n\n\t", apellido);
  else{
    escribir("----------------------------------------------------------------------");
    do{
      escribir("\n\tColoque la id del contacto que desea eliminar:\n\t");
      borrarBuffer();
      gets(idUser);
    }while(strlen(idUser) < 1 || !esnumero(idUser));
    FILE * contactosPersonas = NULL;
    contactosPersonas = fopen("lib/contacts/contactos.txt", "w");
    if(contactosPersonas != NULL && contactosPersonas != 0){
      for(k = 0; k < j; k++){
        if(ids[k] == atoi(idUser)){
          printf("\n\tLa id: %d fue encontrada\n\t", atoi(idUser));
          for(x = 0; x < longitud; x++){
            if(x != ids[k]){
              fprintf(contactosPersonas, "%s %s %s %s %s %s\n", contactos[x].nombre, contactos[x].apellido, contactos[x].ci, contactos[x].edad, contactos[x].peso, contactos[x].telefono);
            }
          }
          eliminado = 1;
        }//END FOR
      }
      if(eliminado)
        printf("\n\tLa persona: %s %s fue eliminada \n\t", contactos[atoi(idUser)].nombre, contactos[atoi(idUser)].apellido);
      else{
        //VOLVEMOS A ESCRIBIR TODO PORQUE CUANDO ABRI EL ARCHIVO EN MODO W, BORRÉ TODO POR ESO ESCRIBO TODO DESDE LA ESTRUCTURA CARGADA CON LOS
        //DATOS ANTERIORES DEL ARCHIVO
        printf("\n\tLa id que usted coloco no existe\n\t");
        for(x = 0; x < longitud; x++){
          fprintf(contactosPersonas, "%s %s %s %s %s %s\n", contactos[x].nombre, contactos[x].apellido, contactos[x].ci, contactos[x].edad, contactos[x].peso, contactos[x].telefono);
        }
      }
      fclose(contactosPersonas);
    }else{
      colorConsolaError();
      escribir("\n\tOcurrio un error al leer el archivo \"lib/contacts/contactos.txt\" verifique su existencia\n\t");
      pausarPantalla();
      eliminarUsuario();
    }
  }
  escribir("\n\t");
  pausarPantalla();
  eliminarUsuario();
}
/*
    ELIMINAR POR EDAD
*/
void eliminarPorEdad(short longitud){
  char edad[4] = "", idUser[4] = "";
  short i = 0, j=0, k = 0, x = 0, encontrado = 0, ids[200] ={0}, eliminado = 0;//suponemos que no se encontro ningun contacto
  //i: indice de los contactos encontrados
  //j: indice de las ids almacenada en ids[200]
  //x: es usado para meter los contactos que no seran eliminados
  do{
  limpiarPantalla();
  //printf("\n\tLongitud: %d\n\t", longitud);
  escribir("\n\tColoque la edad del contacto a eliminar:\n\t");
  borrarBuffer();
  gets(edad);
  }while(strlen(edad) > 3 ||  !esnumero(edad));
  printf("\n\n\tContactos encontrados por la edad: %s:\n\t----------------------------------------------------------------------\n\t", edad);
  for(i = 0; i < longitud; i++){
    if(strcmp(contactos[i].edad, edad) == 0){
      printf("Nombre: %s %s      id: %d\n\t", contactos[i].nombre, contactos[i].apellido, i);
      ids[j++] = i;
      encontrado = 1;
    }
  }
  if(!encontrado) printf("No se encontro ningun contacto con la edad: %s\n\n\t", edad);
  else{
    escribir("----------------------------------------------------------------------");
    do{
      escribir("\n\tColoque la id del contacto que desea eliminar:\n\t");
      borrarBuffer();
      gets(idUser);
    }while(strlen(idUser) < 1 || !esnumero(idUser));
    FILE * contactosPersonas = NULL;
    contactosPersonas = fopen("lib/contacts/contactos.txt", "w");
    if(contactosPersonas != NULL && contactosPersonas != 0){
      for(k = 0; k < j; k++){
        if(ids[k] == atoi(idUser)){
          printf("\n\tLa id: %d fue encontrada\n\t", atoi(idUser));
          for(x = 0; x < longitud; x++){
            if(x != ids[k]){
              fprintf(contactosPersonas, "%s %s %s %s %s %s\n", contactos[x].nombre, contactos[x].apellido, contactos[x].ci, contactos[x].edad, contactos[x].peso, contactos[x].telefono);
            }
          }
          eliminado = 1;
        }//END FOR
      }
      if(eliminado)
        printf("\n\tLa persona: %s %s fue eliminada \n\t", contactos[atoi(idUser)].nombre, contactos[atoi(idUser)].apellido);
      else{
        //VOLVEMOS A ESCRIBIR TODO PORQUE CUANDO ABRI EL ARCHIVO EN MODO W, BORRÉ TODO POR ESO ESCRIBO TODO DESDE LA ESTRUCTURA CARGADA CON LOS
        //DATOS ANTERIORES DEL ARCHIVO
        printf("\n\tLa id que usted coloco no existe\n\t");
        for(x = 0; x < longitud; x++){
          fprintf(contactosPersonas, "%s %s %s %s %s %s\n", contactos[x].nombre, contactos[x].apellido, contactos[x].ci, contactos[x].edad, contactos[x].peso, contactos[x].telefono);
        }
      }
      fclose(contactosPersonas);
    }else{
      colorConsolaError();
      escribir("\n\tOcurrio un error al leer el archivo \"lib/contacts/contactos.txt\" verifique su existencia\n\t");
      pausarPantalla();
      eliminarUsuario();
    }
  }
  escribir("\n\t");
  pausarPantalla();
  eliminarUsuario();
}
