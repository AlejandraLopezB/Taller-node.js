var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//RESTful: reprecentational state => 4 acciones de un bd (crud)
//request http: 
//POST /userts: {username: 'a', email: 'b'}
//PUT: actualizar
//Get: leet
//Delete

var current_id = 1;
var users = [{ id: 1, username: 'jon snow', email: 'jsnow@thewall.ws' },
{ id: 2, username: 'tyrion lannister', email: 'tlann@got.com'}];

app.get('/users', function(req, res) {
	res.json(users);
	res.end();
});

app.post('/users', function(req, res) {
	if(!req.body.username || !req.body.email) {
	    res.statusCode = 400;
	    return res.send('Error 400: Post syntax incorrect.');
	}
	var usuario_nuevo = {
		id: current_id++,
		username: req.body.username,
		email: req.body.email
	};
	users.push(usuario_nuevo);
	res.json(usuario_nuevo);
	res.end();
});

app.delete('/users', function(req, res) {
	var id_a_borrar = req.body.id;
	if(users.length <= id_a_borrar) {
    	res.statusCode = 404;
    	return res.send('Error 404: No user found');
	}
	users.splice(req.params.id, 1);
	res.json(true);
	res.end();
});

app.put('/users', function(req, res) {
	var id_a_actualizar = req.body.id;
	//var user = users.filter(x => x.id == id_a_actualizar);
	for(i = 0; i < users.length; i++){
		if(id_a_actualizar == users[i].id){
			users[i].username = req.body.username;
			users[i].email = req.body.email;
		}
	}
	res.end();
})

app.listen(8000, () =>{
	console.log('Servidor arriba en el puerto 8000');
});