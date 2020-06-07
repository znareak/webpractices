void limpiarPantalla();
void escribir(char[]);
void pausarPantalla();
void escribirEndl(char[]);
void colorConsola();
void colorConsolaError();
void borrarBuffer();
int presiono4(char[]);
void adorno(char, short, char[]);
int esnumero(char[]);
int comprobarEdadEntera(char[]);
int comprobarPesoCorrecto(char[]);
int comprobarSiUsuarioExiste(char[], char[]);

void limpiarPantalla(){
	system("cls");
}
void pausarPantalla(){
	system("pause");
}
void colorConsola(){
	system("color 17");
}
void colorConsolaError(){
	system("color 47");
}
void escribir(char str[]){
	printf("%s ", str);
}
void escribirEndl(char str[]){
	printf("%s \n", str);	
}
void borrarBuffer(){
	fflush(stdin);
};
void adorno(char symbol, short repeticiones, char palabra[]){
  int i = 0;
  printf("\t ");
  for(i = 0; i < repeticiones; i++)
    printf("%c", symbol);
  printf("\n\t| %s |\n\t ", palabra);
  for(i = 0; i < repeticiones; i++)
    printf("%c", symbol);
  escribir("\n");
}
int presiono4(char str[]){
  if((int)str[0] == 52 && strlen(str) < 2){ //user es 52 nos salimos es decir pulso la tecla 4
      escribir("\n\tSe le redireccionara al menu\n\t");
      pausarPantalla();
      return 1;
  }else{
		return 0;
	}
}
int esnumero(char numero[]){
	int size = strlen(numero), i;
	if(size == 0) return 0;
	for(i = 0; i < size; i++){
		if(!isdigit(numero[i]))// 0 para aquellos que no son numeros !0 ->1
			return 0;//no es numero
	}
	return 1;//es numero
};
int esnumeroChar(char c){
	if(!isdigit(c)) return 0;
	return 1;
}
int comprobarEdadEntera(char numero[]){
	int size = strlen(numero), i;
	if(size < 1) return 1;
	for(i = 0; i < size; i++){
		if(ispunct(numero[i]))
			return 1; //retornara 1, cuando la cadena tenga un punto
	}
	return 0;//si no tiene puntos, regresa 0
}
int comprobarPesoCorrecto(char numeroKg[]){
	int size = strlen(numeroKg), i, cantidadPuntos = 0;
	if(size < 1) return 1;
	if(numeroKg[size-1] == '.' || numeroKg[size-1] == ',') return 1; //formato incorrecto
	if(ispunct(numeroKg[0])) return 1; //formato incorrecto
	for(i = 0; i < size; i++){
		if(numeroKg[i]=='.'  || numeroKg[i]==',')
			cantidadPuntos++;
		else if(!esnumeroChar(numeroKg[i])) return 1; //formato incorrecto
	}
	if(cantidadPuntos > 1) return 1;//el formato del numero tiene mas 1 punto decimal, damos un error
	return 0;//la cadena esta en el formato correco
}
