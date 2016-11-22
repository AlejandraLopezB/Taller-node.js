var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var models = require('./models/');

var app = express();
//var horas = require('./controllers/horas');
//var getHora = require('./controllers/getHora');

app.use("/node_modules", express.static('node_modules'));
//app.use(express.static(__dirname + '/views'));
//app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Hora de la API
var Hora = require('./models/').Hora;

module.exports = {
	//Ingresa una nueva hora
	create(req, res) {
		Hora.create(req.body)
		.then(function (nuevaHora) {
			res.status(200).json(nuevaHora);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	}
};

const axios = require('axios');
const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=WiFRlQS9yj47GHj1YXiPEZ3nYglmRlxWvo8ze18f2ws5gqSCYN7OHfHqcN776BN5iF45Y1QPSqNyv1Rw6xq17B8CIqyDBwSDm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9GRkcRevgjTvo8Dc32iw_BLJPcPfRdVKhJT5HNzQuXEeN3QFwl2n0M6ZmO-h7C6eIqWsDnSrEd&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk";



app.get('/guardar-hora', (req, res) => {
    axios.get(API_URL)
	  .then(function (response) {
	  	year = response.data.year;
	  	month = response.data.month;
	  	day = response.data.day;
	  	hours = response.data.hours;
	  	minutes = response.data.minutes;
	  	seconds = response.data.seconds;
	  	fecha = {"hora": year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds}
	  	Hora.create(fecha);
	    res.json(fecha);
	    res.end();
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
});


//fibonacci en la direccion /fibonacci/:n
const fibonacci = require('./lib/fib.js');

app.get('/fibonacci/:n', (req, res) => {

	var valor = Number(req.params.n);
	var aux = "fibonacci-" + valor; 

    var result = {};
    result['fibonacci-'+valor] = fibonacci.fib(valor);

    res.json(result);
    res.end();
});


//app.get('/guardar-hora');

models.sequelize.sync({force: false}).then(function () {
    app.listen(9000, () => {
        console.log('Servidor arriba en el puerto 9000');
    });
});

//module.exports = app;

//verificar coneccion con la base de datos
//var models = require('./models/');
// models.sequelize
//   .authenticate()
//   .then(function () {
//     console.log('Connection successful');
//   })
//   .catch(function(error) {
//     console.log("Error creating connection:", error);
//   });
