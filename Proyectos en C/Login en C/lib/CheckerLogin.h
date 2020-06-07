int hayEspacios(char usuario[]);
int verificarUsuarioExistencia(char[]);

int hayEspacios(char usuario[]){
	short i = 0;
	for(i = 0; i < strlen(usuario); i++){
		if(usuario[i] == ' '){
		  return 1;
		}
	}
	return 0;
};
int verificarUsuarioExistencia(char user[]){
	FILE * file = NULL;
	file = fopen("lib/db/users.txt", "r");
	char userDB[30] = "";
	if(file != NULL){
		fscanf(file,"%s", userDB);
		if(strcmp(user, userDB) == 0){
			colorConsolaError();
			printf("\n\tEl usuario %s ya existe en la base de datos\n\t", user);
			pausarPantalla();
			return 1;
		}
		return 0;
	}else{
		colorConsolaError();
		escribir("\n\tNose puede comprobar el usuario, porque el archivo o db no existe\n\t");
		pausarPantalla();
	}
};
