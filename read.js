const fs = require('fs');

//readFile es asincronico
//leer un archivo y mostrar el promedio de latitudes
// var data = [];

// fs.readFile('usuarios.json', 'utf8', (err, data2) => {
// 	data = JSON.parse(data2);
// 	console.log(sacar_promedio(data)) //sacar_promedio es una funcion
// });


//instalar libreria con npm => npm i axios
//hacer request http 
//imprimir tamano promedio de los comentarios
//librerias: axios, superagent, request, jquery
//usar request

//Promedio latitudes
var request = require('request');

const API = "http://jsonplaceholder.typicode.com/comments";

function promedio(data) {
	return data.reduce((prev, next) => prev + next, 0) / data.length
};

request(API, function(error, response, body){
	if (error) return console.log(error);
	var data = JSON.parse(body);
	var bodies_lengths = data.map(d => d.body.length);
	console.log(promedio(bodies_lengths));
})

//ejemplo request
// request(API, function(error, response, body){
// 	if(!error && response.statusCode == 200) {
// 	 	console.log(body)
// 	}
// }

//para agregar dependencias => npm install request --save (request es un ejemplo)