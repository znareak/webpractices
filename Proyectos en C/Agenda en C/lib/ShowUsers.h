void mostrarUsuarios();
void menu();

void mostrarUsuarios(){
  colorConsola();
  limpiarPantalla();
  escribir("\n\tTodos los contactos guardados son:\n\n\t");
  short cantidad = cargarEstructura(), i;
  if(cantidad == 0){
    escribir("\n\tNo hay contactos a mostrar!\n\n\t");
    pausarPantalla();
    menu();
  }else{
    for(i=0; i < cantidad; i++){
      printf("Nombre: %s\n\t", contactos[i].nombre);
      printf("Apellido: %s\n\t", contactos[i].apellido);
      printf("CI: %s\n\t", contactos[i].ci);
      printf("Edad: %s\n\t", contactos[i].edad);
      printf("Peso: %s\n\t", contactos[i].peso);
      printf("Telefono: %s\n\t", contactos[i].telefono);
      printf("----------------------------------------------------------------------\n\n\t");
    }
    escribir("\n\t");
    pausarPantalla();
    menu();
  }
}
