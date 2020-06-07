void limpiarPantalla();
void escribir(char[]);
void pausarPantalla();
void escribirEndl(char[]);
void colorConsola();
void colorConsolaError();
void borrarBuffer();
int presiono4(char[]);
void menu();
void adorno(char, short, char[]);

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
