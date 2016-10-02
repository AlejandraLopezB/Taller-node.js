var request = require('request');
const fs = require('fs');

const API = "http://jsonplaceholder.typicode.com/users";
const API2 = "http://jsonplaceholder.typicode.com/albums";
const API3 = "http://jsonplaceholder.typicode.com/photos";


var user_name = process.argv[2];
//node callbackHell 'parametro'
//console.log(user_name);
var array = [];

request(API, function(error, response, body){
	if (error) return console.log(error);
	var data = JSON.parse(body);

	//Nombre usuario
	var user = data.filter(x => x.name == user_name)[0];
	//var user_id = user.id;
	array.push("id: " + user.id);
	array.push("name: " + user.name);
	array.push("username: " + user.username);
	array.push("email: " + user.email);

	//Albums
	request(API2, function(error, response, body){
		if (error) return console.log(error);
		var a = JSON.parse(body);

		var albums = a.filter(x => x.userId == user.id);

		//console.log(albums[0].id);

		//Photos
		request(API3, function(error, response, body){
			if (error) return console.log(error);
			var b = JSON.parse(body);
			var al = {};
			
			array.push("albums: ");
			for(var i = 0; i < albums.length; i++){
				//console.log("Album " + [i] + albums[i]);
				//al.push(albums[i]);
				array.push("id: " + albums[i].id);
				array.push("title: " + albums[i].title);
				array.push("photos: ");
				var photos = b.filter(x => x.albumId == albums[i].id);
				for (var j = 0; j < photos.length; j++) {
					array.push(photos[j]);
				}
			}
			fs.writeFile('callbackHell.json', JSON.stringify(array), function(err){
				if (err) return console.log(err.message);
				console.log('Archivo escrito \\o/');
			});
		});
	});
});

//Promise = bluebird para evitar que quede todo feo y anidado