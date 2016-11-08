var request = require('request');

const API_URL = "http://jsonplaceholder.typicode.com";
const Promise = require('bluebird');

// function myRequest(url){
// 	return new Promise(function(resolve, reject) {
// 		resolve("hola mundo");
// 	});
// }

//se puede poner esto en vez de function myRequest(url), pero habria que pasarlo a JSON
//var myRequest = Promise.promisify(request);

function myRequest(url){
	return new Promise(function(resolve, reject) {
		request(url, function(err, respondse, body) {
			if(err) {
				return reject(err);
			}
			resolve(JSON.parse(body));
		})
	});
}

//forma paralela (para que terminen todos al mismo tiempo)
var promesa1 = myRequest(API_URL + '/users')
var promesa2 = myRequest(API_URL + '/albums')
var promesa3 = myRequest(API_URL + '/photos')
Promise.all([promesa1, promesa2, promesa3])
	.then(function(x) {
		console.log(x);
	});

//forma secuencial
//las promesas si o si terminan con resolve o reject
// var promesa = myRequest(API_URL + '/users')
// 	.then(function(body) { //resolve
//		console.log(JSON.parse(body)) //para promisify
// 		console.log(body);
// 		return myRequest(API_URL + '/albums')
// 	})
// 	.then(function(albums) {
// 		return myRequest(API_URL + '/photos');
// 	})
// 	.then(function(photos) {
// 		console.log(photos);
// 	})

// 	.catch(function(err) { //reject
// 		console.log('hubo un error', err);
// 	})

// var promesa = request(API_URL + '/users');
// promesa.then(function() {});
// promesa.catch(function () {});