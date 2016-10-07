var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//RESTful: reprecentational state => 4 acciones de un bd (crud)
//request http: 
//POST /userts: {username: 'a', email: 'b'}
//PUT: actualizar
//Get: leet
//Delete

var current_id = 1;
var users = [{ id: 1, username: 'jon snow', email: 'jsnow@thewall.ws' }];

app.get('/users', (req, res) => {
	//res.send('Aqui estan los usuarios: ');
	res.json(users);
	res.end();
});


app.post('/users', (req, res) => {
	console.log(req.body);
	var usuario_nuevo = {
		id: current_id++,
		username: req.body,
		email: req.body,
	}
	users.psuh(usuario_nuevo);
	res.json(usuario_nuevo);
	res.end();
})

// app.delete('/users', (req, res) => {
// 	var id_a_borrar = req.body.id;
// 	//borrar el usuario y retornarlo
// })

// app.put('/users', (req, res) => {
// 	var id_a_actualizar = req.body.id;
// 	var usuario_nuevo = {
// 		username: req.body.username,
// 		email: req.body.email
// 	}
// })

app.listen(8000, () =>{
	console.log('Servidor arriba en el puerto 8000');
});