void iniciarSesion();
void menu();
int presiono4(char[]);
void perfil(char[], char[]);
void iniciarSesion(){
  int repetir = 1;
  do{
    colorConsola();
    limpiarPantalla();
    char user[30] = "", pass[30] = "", userDB[30] = "", passDB[30]="";
    borrarBuffer();
    escribir("\n\tTeniendo su cuenta puede iniciar sesion.                    4: salir\n\t");
    escribir("\n\n\tEscriba su usuario:\t");
    escribir("\n\t-----------------------------------------------\n\t");
    gets(user);
    if(presiono4(user)){
		repetir = 0;
		menu();
	}else if(hayEspacios(user)){
      escribir("\n\tEspacios en blanco en su nombre !!\n\t");
      colorConsolaError();
      pausarPantalla();
      repetir = 1;
    }else{
      if(strlen(user) <4 || strlen(user) >30){
    		printf("\n\tSu usuario (%s) debe ser minimo de 4 caracteres y maximo de 30\n\t", user);
    		colorConsolaError();
    		pausarPantalla();
    		repetir = 1;
    		}else{
            escribir("\n\n\tEscriba su clave:\t");
            escribir("\n\t-----------------------------------------------\n\t");
            borrarBuffer();
            gets(pass);
            if(presiono4(pass)){
					repetir = 0;
					menu();
				}else if(strlen(pass) < 5){
    				  escribir("\n\tSu clave debe ser minimo de 5 caracteres \n\t");
    				  colorConsolaError();
    				  pausarPantalla();
    				  repetir = 1;
  			   }else{
              borrarBuffer();
              FILE * file = NULL;
              file = fopen("lib/db/users.txt", "r"); //solo leer el archivo
              if(file != NULL){
                fscanf(file, "%s %s", userDB, passDB);
                //printf("\n\tDatos en la db: usuario: %s     clave: %s\n\t", userDB, passDB);
                fclose(file);
                if( strcmp(user, userDB)== 0 && strcmp(pass, passDB)== 0 ){
                  escribir("\n\t-----------------------------------------------\n\t");
                  printf("\n\tCuenta detectada en nuestra base de datos!. Puede entrar.\n\t");
                  borrarBuffer();
                  pausarPantalla();
                  repetir = 0;
                  perfil(user, pass);
                }else{
                  escribir("\n\t-----------------------------------------------\n\t");
                  printf("\n\tEl usuario: %s y la clave %s,\n\tno estan en nuestra base de datos.\n\t", user, pass);
                  colorConsolaError();
                  borrarBuffer();
                  repetir = 1;
                  pausarPantalla();
                }
              }else{
                escribir("\n\tLa direccion de la base de datos es incorrecta, o no existe el archivo\n\t");
                colorConsolaError();
                pausarPantalla();
                repetir = 0;
                menu();
              }
           }
        }
    }
  }while(repetir);
}
