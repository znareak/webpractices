
/**
 * Uso de la API de ECMA6 de webSQL (base de datos en la web)
 */
let user = 'root', pass= 'root123';
var db = openDatabase('mydb','1.0',"Mi primer db", 1024 * 5);
db.transaction(function(sql){
	
    sql.executeSql('CREATE TABLE prueba(user, password)', [], function(){
		alert("Tabla creada");
	})
	
	sql.executeSql('INSERT INTO prueba(user, password) VALUES (?, ?)',["root", "1243"], function(){
		alert("Se ha insertado los valores en la tabla \"prueba\" ");
	});
	
});

db.transaction(function(sql){
	sql.executeSql('SELECT * FROM prueba',[], (e, data) => {
		var info = {...data.rows['0']};
		console.log(info)
	});
})

