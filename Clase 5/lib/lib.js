//module.exports //para exportar funcionalidades entre archivos. Se hace en un archivo lib.js con las funcionalidades
 function rot13(str){
 	return str.toUpperCase();
 }

module.export.cesar = function(str){ //para exportar altiro
	return str.toLowerCase();
}

  // module.exports = { //para exportar varias funciones
  // 	rot13: rot13,
  //	cesar: cesar;
  // }

  module.exports = rot13; //para exportar una funcion