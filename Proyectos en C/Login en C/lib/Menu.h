void menu();
void registrarUsuario();
void iniciarSesion();
void borrarCuenta();
void adorno(char symbol, short repeticiones, char palabra[]);

void menu(){
		int repeat = 1;
	do{
		limpiarPantalla();
		char opcion[] = "";
		colorConsola();
		escribir("\n\n\tBienvenido al sistema de registro y logeo de usuarios\n\tPor favor seleccione lo que desea hacer:\n\n");
		adorno('-', 65, "1-Registrarse                   Cree una nueva cuenta desde 0. ");
		adorno('-', 65, "2-Iniciar sesion                Acceda a su cuenta, desde aqui.");
		adorno('-', 65, "3-Borrar cuenta                 Elimine su cuenta y sus datos. ");
		adorno('-', 65, "4-Salir                         Cerrar el programa.            ");
    escribir("\t");
		scanf("%s",&opcion);
		if(strlen(opcion) > 1){
			escribir("\n\tSolo se aceptan 2 caracteres (1/2)\n\t");
			borrarBuffer();
			pausarPantalla();
		}else{
			switch((int)opcion[0]){
				case 49 : 
					escribir("\n\tEligio registrar nuevo usuario\n\t"); 
					pausarPantalla();
					registrarUsuario();//INVOCAR A LA FUNCION
					break;
				case 50: 
					escribir("\n\tEligio iniciar sesion\n\t"); 
					pausarPantalla();
					iniciarSesion();
					break;
				case 51: 
					escribir("\n\tEligio borrar cuenta\n\t"); 
					repeat = 0;
					pausarPantalla();
					borrarCuenta();
					break;
					case 52: 
					escribir("\n\tEligio salir del programa\n\t"); 
					repeat = 0;
					break;
				default : 
					escribir("\n\tElgio una opcion invalida\n\t");
					colorConsolaError();
					borrarBuffer();
					pausarPantalla();
					repeat = 1;
					break;
				}
		}
	}while(repeat);
}
