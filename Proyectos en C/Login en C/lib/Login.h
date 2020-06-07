int verificarUsuarioExistencia(char[]);
void registrarUsuario();
void iniciarSesion();
void menu();
void registrarUsuario(){
	char usuario[30] = "", op[] = "", clave[30] = "";
	int repetir = 1;
	short i = 0;
	do{
      colorConsola();
	  	limpiarPantalla();
	  	escribir("\n\tA continuacion debe usted de registrar un usuario           4: salir\n\tsiguiendo estas normas:              \n\t");
	  	escribir("\n\t-Minimo 4 caracteres de nombre de usuario y maximo 30.");
	  	escribir("\n\t-El nombre no puede contener espacios en blanco.");
	  	escribir("\n\t-No debe ser un usuario y clave vacio.");
	  	escribir("\n\t-La clave debe ser minimo de 5 caracteres.");
	  	escribir("\n\n\tEscriba su usuario:\t");
	  	escribir("\n\t-----------------------------------------------\n\t");
	  	borrarBuffer();
		gets(usuario);
      if(presiono4(usuario)){
			repetir = 0;
			menu();
		}else if(verificarUsuarioExistencia(usuario)){
        repetir = 1;
      }else if(hayEspacios(usuario)){
    		escribir("\n\tEspacios en blanco en su nombre !!\n\t");
    		colorConsolaError();
    		pausarPantalla();
    		repetir = 1;
    	}else{
    		if(strlen(usuario) <4 || strlen(usuario) >30){
    				printf("\n\tSu usuario (%s) debe ser minimo de 4 caracteres y maximo de 30\n\t", usuario);
    				colorConsolaError();
    				pausarPantalla();
    				repetir = 1;
    		}else{
    			escribir("\n\tEscriba su clave:\t");
    			escribir("\n\t-----------------------------------------------\n\t");
    			borrarBuffer();
    			gets(clave);
    			if(presiono4(clave)){
					repetir = 0;
					menu();
				}else if(strlen(clave) < 5){
    				escribir("\n\tSu clave debe ser minimo de 5 caracteres \n\t");
    				colorConsolaError();
    				pausarPantalla();
    				repetir = 1;
    			}else{
  			   	char completo[100];
    				FILE * dbUser = NULL;
    				dbUser = fopen("lib/db/users.txt", "w");
    				if(dbUser != NULL){
    					sprintf(completo, "%s %s\n", usuario, clave);
    					fprintf(dbUser,"%s",completo);
    					printf("\n\tEl usuario: %s, con la clave %s\n\tfueron agregados a la base de datos\n\t", usuario, clave);
    					fclose(dbUser);
    				}else{
    					escribir("\n\tPor alguna razon no se pudo guardar la informacion\n\tconsulte si la ruta o el archivo existan\n\t");
    					colorConsolaError();
    					pausarPantalla();
    				}
    				escribir("\n\t----------------------------------\n\t");
	            escribir("\n\tDesea volver a registrar? (1/0):  (se sobreescribira la cuenta anterior) ");
	            gets(op);
	              if(strlen(op) > 1){
	                escribir("\n\tSolo se aceptan dos caracteres (1/0)\n\t");
	                colorConsolaError();
	                pausarPantalla();
	                menu();
	              }else{
      				  switch((int)op[0]){
      					case 49 : // 49 -> 1
      					  repetir = 1;
      					break;
      					case 48://48 -> 0
      					  repetir = 0;
      					  menu();
      					break;
      					default:
      					  escribir("\n\tOpcion invalida, se le redirecciona al menu\n\t");
      					  colorConsolaError();
      					  pausarPantalla();
      					  repetir = 0;
      					  menu();
      					break;
      				  }
      				}	
    			 }
    		 }
    	}
	}while(repetir);
};
