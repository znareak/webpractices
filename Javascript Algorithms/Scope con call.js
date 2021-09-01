/*!
	Ejemplo de call y apply JAVASCRIPT - SCOPE
*/
var $query = document.querySelector;//agarra el contexto o el scope de window
$query('#mv-notice-container'); //Uncaught TypeError: Illegal invocation

/*
	con call(scope, arguments) cambiamos el scope de la funcion
	scope el ambito de la funcion es decir, donde apunta this, y arguments son el conjunto de argumentos que agarra
	la funcion querySelector();
*/
$query.call(document, '#mv-notice-container');