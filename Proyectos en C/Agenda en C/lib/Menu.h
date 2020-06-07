
void menu();
void adorno(char symbol, short repeticiones, char palabra[]);
void eliminarUsuario();
void buscarUsuario();
void agregarUsuario();
void mostrarUsuarios();
void modificarUsuario();
short cargarEstructura();

/*** IMPORTANTE ***
  Esta estructura se cargara de datos desde un archivo de texto que contiene los usuarios,
  En realidad nunca se modificara los campos de la estructura, ya que la estructura solo actua como medio
  de lectura de todos los usuarios almacenado en el archivo de texto.
  Cada vez que se modifique o se reescriba el archivo de texto, la estructura se actualizara
  invocando a la funcion cargarEstructura(); que devuelve un entero con la cantidad de usuarios
  almacenados en el archivo de texto.
*/
struct Contacto{
  char nombre[20];
  char apellido[20];
  char edad[4];
  char telefono[20];
  char peso[8];
  char ci[20];
  short id;
};
//**************************************************/
struct Contacto contactos[200];//Tambien esta variable tipo estructura es importante porque es la contiene todo los contactos
void menu(){
	short repeat = 1;
	do{
		limpiarPantalla();
		char opcion[] = "";
		colorConsola();
		escribir("\n\n\tBienvenido al sistema de agenda de contactos\n\tPor favor seleccione lo que desea hacer:\n\n");
		adorno('-', 65, "1-Agregar usuario               Cree nuevos contactos.        ");
		adorno('-', 65, "2-Eliminar usuario              Remover contactos de la lista.");
		adorno('-', 65, "3-Buscar usuario                Busque, en diferentes modos   ");
		adorno('-', 65, "4-Modificar usuario             Cambie usuarios viejos        ");
		adorno('-', 65, "5-Mostrar los contactos         Ver registrados               ");
		printf("\t--->");
		scanf("%s",&opcion);
		if(strlen(opcion) > 1){
			borrarBuffer();
			continue;
		}else{
			switch((int)opcion[0]){
				case 49 : 
  					repeat = 0;
  					agregarUsuario();
				break;
				case 50: 
  					repeat = 0;
  					eliminarUsuario();
				break;
				case 51: 
  					repeat = 0;
  					buscarUsuario();
				break;
				case 52: 
  					repeat = 0;
  					modificarUsuario();
				break;
				case 53: 
  					repeat = 0;
  					mostrarUsuarios();
				break;
				default :
					repeat = 1;
				break;
				}
		}
	}while(repeat);
}
short cargarEstructura(){//esta funcion nos permite cargar los valores a las estructura y devuelve la cantidad de usuarios registrados
  short y = 0;
  FILE * datos = NULL;
  datos = fopen("lib/contacts/contactos.txt", "r");
  if(datos != NULL){
    while(!feof(datos)){
      fscanf(datos, "%s %s %s %s %s %s", contactos[y].nombre, contactos[y].apellido, contactos[y].ci, contactos[y].edad, contactos[y].peso, contactos[y].telefono);
      y++;
    }
  }else{
    colorConsolaError();
    escribir("\n\tOcurrio un error al leer el archivo \"lib/contacts/contactos.txt\" verifique su existencia\n\t");
    pausarPantalla();
    menu();
  }
  if(y == 0) return 0; //por seguridad comprobamos que la cantidad de usuarios es 0
  return y-1;//retornamos y-1 porque al iterar en un for se mostrara un contacto demas (vacio)
}
