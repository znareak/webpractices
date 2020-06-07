void borrarCuenta();
void borrarCuenta(){
  char textCount[] = "";
  limpiarPantalla();
  escribir("\n\tSe eliminaran todos los datos dentro de la base de datos\n\t");
  FILE * file = NULL;
  file = fopen("lib/db/users.txt", "r");
  if(file != NULL){
      fscanf(file, "%s", textCount);
      //printf("\n\t%d\n\t", strlen(textCount));
    if(strlen(textCount) > 0){
      file = fopen("lib/db/users.txt", "w");
      fputs("", file);
      fclose(file);
      escribir("\n\t-----------------------------------------------------------\n\t");
      escribir("\n\tEl contenido de su cuenta ha sido eliminado permanentemente\n\t");
      pausarPantalla();
      menu();
    }else{
      escribir("\n\t-----------------------------------------------------------\n\t");
      escribir("\n\tNo existe cuentas en la base de datos, registre una primero.\n\t");
      colorConsolaError();
      pausarPantalla();
      menu();
    }
  }else{
    escribir("\n\t-----------------------------------------------------------\n\t");
    escribir("\n\tLa direccion de la base de datos es incorrecta, o no existe el archivo\n\t");
    colorConsolaError();
    pausarPantalla();
    menu();
  }
};
