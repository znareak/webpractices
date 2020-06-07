void agregarUsuario();
void modificarUsuario();
void menu();

void agregarUsuario(){
    short cantidad = cargarEstructura(), i;
    limpiarPantalla();
    printf("\n\tCantidad de usuarios almacenados: %d\n\t", cantidad);
    char nombre[20], apellido[20], edad[4], telefono[20], peso[8], ci[20];
    borrarBuffer();
    escribir("\n\tA continuacion debe de proporcionar la siguiente informacion\n\tpara agregar un nuevo contacto a la lista.\n\t");
    escribir("-Nombre y apellido del contacto\n\t-CI del contacto\n\t-Nro de telefono\n\t-Peso\n\t-Edad del contacto\n\t");
  		printf("\n\tColoque el nombre de la persona:\n\t");
  		borrarBuffer();
  		gets(nombre);
  		while(strlen(nombre) < 3){
        limpiarPantalla();
        printf("\n\tEl nombre del contacto es incorrecto o muy corto\n\tColoque otro nombre:\n\t");
        borrarBuffer();
  		  gets(nombre);
      }
  		printf("\n\tColoque el apellido de %s: ", nombre);
  		borrarBuffer();
  		gets(apellido);
  		while(strlen(apellido) < 3){
        limpiarPantalla();
        printf("\n\tEl apellido del contacto %s es incorrecto o muy corto\n\tColoque otro apellido:\n\t", nombre);
        borrarBuffer();
  		  gets(apellido);
      }
      for(i = 0; i < cantidad; i++){
        if(strcmp(strlwr(contactos[i].nombre), strlwr(nombre)) == 0 && strcmp(strlwr(contactos[i].apellido), strlwr(apellido)) == 0){
          char res[3] = "";
          do{
            escribir("\n\tYa ese existe ese contacto, desea modificarlo? (1/0)\n\t");
            borrarBuffer();
            gets(res);
          }while(strlen(res) < 1 || strlen(res)>1 || !esnumero(res));
          i = cantidad + 1;//rompemos el ciclo
          if((int)res[0] == 48)//si el usuario no quiere modificar el contacto
            menu();
          else//funcion de modificar
            modificarUsuario();
        }
      }
      
      printf("\n\tColoque la cedula de %s: ", nombre);
  		borrarBuffer();
      gets(ci);
      while(!esnumero(ci)){
        limpiarPantalla();
        printf("\n\tLa cedula de %s es incorrecta\n\tColoque otra CI:\n\t", nombre);
        borrarBuffer();
  		  gets(ci);
      }
  		printf("\n\tColoque la edad de %s: ", nombre);
  		borrarBuffer();
  		gets(edad);
      while(!esnumero(edad)){ 
        limpiarPantalla();
        printf("\n\tLa edad de %s es incorrecta, coloque otra:\r\n\t", nombre);
        borrarBuffer();
        gets(edad);
      }
      
      printf("\n\tColoque el peso de %s en kg: ", nombre);
  		borrarBuffer();
  		gets(peso);
  		while(comprobarPesoCorrecto(peso)){ 
        limpiarPantalla();
        printf("\n\tEl peso de %s es incorrecto, coloque otra medida (kg):\r\n\t", nombre);
        borrarBuffer();
        gets(peso);
      }
  		printf("\n\tColoque el  telefono de %s: ", nombre);
  		borrarBuffer();
  	  gets(telefono);
      while(!esnumero(telefono)){ 
        limpiarPantalla();
        printf("\n\tEl nro. telefonico de %s es incorrecto, coloque otro:\r\n\t", nombre);
        borrarBuffer();
        gets(telefono);
      }
    FILE * personas = NULL;
  	personas = fopen("lib/contacts/contactos.txt", "a"); //para agregar al final
  	if(personas != NULL){
      fprintf(personas, "%s %s %s %s %s %s\n",nombre, apellido, ci, edad, peso, telefono);
      fclose(personas);
    }else{
      escribir("\n\tLa direccion de la base de datos es incorrecta, o no existe el archivo\n\t");
      colorConsolaError();
      pausarPantalla();
      menu();
    }
  	printf("\n\tLa persona: %s %s, fue agregada con exito", nombre, apellido);
  	escribir("\n\t");
  	pausarPantalla();
  	menu();
}
