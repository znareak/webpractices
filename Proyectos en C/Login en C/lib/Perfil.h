void perfil(char[], char[]);
void menu();
void adorno(char, short, char[]);
void borrarBuffer();
void mostrarDatos(char[], char[]);
void perfil(char usuario[], char pass[]){
	short repetir = 1;
	char res[] = "";
	do{
    colorConsola();
		limpiarPantalla();
		printf("\n\tBienvenido %s, indique que desea hacer ahora\n", usuario);
		escribir("\n");
		adorno('-',28, "1-Ver mi usuario y clave ");
		adorno('-',28, "4-Salir de la sesion     ");
		escribir("\t");
		borrarBuffer();
		gets(res);
		if(strlen(res) > 1){
			escribir("\n\tNo es permitido mas de 1 caracter\n\t");
			colorConsolaError();
			pausarPantalla();
		}else{
			switch((int)res[0]){
				case 49 : 
					mostrarDatos(usuario, pass);
				break;
				case 52 :
					repetir = 0;
					menu();
				break;
				default:
          printf("\n\tLa opcion %c es invalida\n\t", res[0]);
          colorConsolaError();
          pausarPantalla();
          repetir = 1;
          break;
			}
		}
	}while(repetir);
}
void mostrarDatos(char user[], char pass[]){
	limpiarPantalla();
	printf("\n\tSus datos son:\n\tUsuario: %s\n\tClave: %s\n\t", user, pass);
	pausarPantalla();
	perfil(user, pass);
}
