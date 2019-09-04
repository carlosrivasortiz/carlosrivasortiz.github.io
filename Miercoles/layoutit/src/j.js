var c = 1;
var d = 9;
var u = 2;
var mensaje = "";

 function validar() {
 
 	var centena = document.GetElementByID ("centena").value;
 	var decena = document.GetElementByID ("decena").value;
 	var unidad = document.GetElementByID ("unidad").value; 



   if ((centena =="") || (decena =="" ) || (unidad =="")){
   	alert("ninguno esta vacio");
   }
else if ((centena == decena) || (decena == unidad ) || (unidad == centena)){
	alert("no se pueden repetir <br>");
}
else {
	if ((centena == c) && (decena == d) && (unidad == u)){
		document.GetElementByID ("texto").innerHTML = "CONTRASEÑA CORRECTA <br>";
	}
	else {
		if (centena == c){
			mensaje += "la centena es correcta <br>";
		}
	else{ 
		mensaje += "la centena es incorrecta <br>";
		}
	
		if (decena == d){
			mensaje += "la decena es correcta <br>";
		}
		
	else{ 
		mensaje += "la decena es incorrecta <br>";
		}

	
		if (unidad == u){
			mensaje += "la unidad es correcta <br>";
		}
	else{ 
		mensaje += "la unidad es incorrecta <br>";
		}
			document.GetElementByID ("texto").innerHTML = mensaje;

	}
}
} // cierre de funcion