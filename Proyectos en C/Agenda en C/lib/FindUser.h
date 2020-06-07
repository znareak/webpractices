void buscarUsuario();
void buscarContacto(char);
void menu();

void buscarUsuario(){
	short repeat = 1;
	do{
	limpiarPantalla();
	char opcion[] = "";
	escribir("\n\tEn esta seccion puede buscar usuarios tomando por:");
	escribir("\n\t1-Nombre\n\t2-Apellido\n\t3-Edad\n\t\n\t4-Menu Principal\n\t--->");
	borrarBuffer();
	scanf("%s",&opcion);
		if(strlen(opcion) > 1){
				borrarBuffer();
		}else{
			switch((int)opcion[0]){
				case 49 : 
					repeat = 0;
					buscarContacto('N'); //N de buscar por Nombre
				break;
				case 50: 
					repeat = 0;
          buscarContacto('A'); //A de buscar por apellido
				break;
				case 51: 
					repeat = 0;
          buscarContacto('E'); //E de buscar por edad
				break;
				case 52: 
					repeat = 0;
					menu();
				break;
				default:
					borrarBuffer();
					repeat = 1;
				break;
			}
		}
	}while(repeat);
}
void buscarContacto(char metodo){
  short cantidad = cargarEstructura(), i = 0, encontrado = 0;
  if(metodo == 'N'){
    char nombre[20] = "";
    do{
      limpiarPantalla();
      escribir("\n\tBusque contactos por nombre,\n\trecuerde que son minimo 3 caracteres de nombre.\n\t");
      borrarBuffer();
      gets(nombre);
    }while(strlen(nombre) < 3);
    printf("\n\tPersonas encontradas por el nombre \"%s\": \n\n\t", nombre);
    for(i = 0; i < cantidad; i++){
      if(strcmp(strlwr(contactos[i].nombre), strlwr(nombre)) == 0 ){
        printf("Nombre: %s\n\tApellido: %s\n\tCI: %s\n\tEdad: %s\n\tPeso: %s\n\tTelefono: %s\n\t",contactos[i].nombre,contactos[i].apellido, contactos[i].ci,contactos[i].edad,contactos[i].peso,contactos[i].telefono);
        printf("-----------------------------------------------------\n\n\t");
        encontrado++;//aumentamos el nro. de personas encontrados
      }
    }
    if(!encontrado)
      escribir("No existen personas con ese nombre\n\n\t");
    pausarPantalla();
    buscarUsuario();
    
  }else if(metodo == 'A'){
    char apellido[20] = "";
    do{
      limpiarPantalla();
      escribir("\n\tBusque contactos por apellido,\n\trecuerde que son minimo 3 caracteres de apellido.\n\t");
      borrarBuffer();
      gets(apellido);
    }while(strlen(apellido) < 3);
    printf("\n\tPersonas encontradas por el apellido \"%s\": \n\n\t", apellido);
    for(i = 0; i < cantidad; i++){
      if(strcmp(strlwr(contactos[i].apellido), strlwr(apellido)) == 0 ){
        printf("Nombre: %s\n\tApellido: %s\n\tCI: %s\n\tEdad: %s\n\tPeso: %s\n\tTelefono: %s\n\t",contactos[i].nombre,contactos[i].apellido, contactos[i].ci,contactos[i].edad,contactos[i].peso,contactos[i].telefono);
        printf("-----------------------------------------------------\n\n\t");
        encontrado++;//aumentamos el nro. de personas encontrados
      }
    }
    if(!encontrado)
      escribir("No existen personas con ese apellido\n\n\t");
    pausarPantalla();
    buscarUsuario();
  }else if(metodo == 'E'){
    char edad[4] = "";
    do{
      limpiarPantalla();
      escribir("\n\tBusque contactos por edad.\n\tColoque la edad:\n\t");
      borrarBuffer();
      gets(edad);
    }while(strlen(edad) == 0 || !esnumero(edad));
    printf("\n\tPersonas encontradas por la edad %s: \n\n\t", edad);
    for(i = 0; i < cantidad; i++){
      if(strcmp(contactos[i].edad, edad) == 0 ){
        printf("Nombre: %s\n\tApellido: %s\n\tCI: %s\n\tEdad: %s\n\tPeso: %s\n\tTelefono: %s\n\t",contactos[i].nombre,contactos[i].apellido, contactos[i].ci,contactos[i].edad,contactos[i].peso,contactos[i].telefono);
        printf("-----------------------------------------------------\n\n\t");
        encontrado++;//aumentamos el nro. de personas encontrados
      }
    }
    if(!encontrado)
      escribir("No existen personas con esa edad\n\n\t");
    pausarPantalla();
    buscarUsuario();
  }
};
