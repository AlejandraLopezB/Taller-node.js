var fs = require('fs');
var gzip = require('zlib').createGzip();
var stream = require('stream');

var writer = fs.createWriteStream('codigo.txt');


var rot13 = new stream.Transform;
rot13._write = function(data, encoding, done) {
    var str = data.toString('utf8');
    var codigo = "";
    for (var i = 0; i < str.length; i++) {
    	var letra = str.charCodeAt(i); //unicode de str(i)
    	if(letra >= 97 && letra <= 122){ //codificacion
    		letra = letra - 97;
    		letra = (letra + 13) % 26;
    		letra = letra + 97;
    	}
    	var resultado = String.fromCharCode(letra); //pasa el resultado de la codificacion a string
    	codigo = codigo + resultado; //concatena todas las letras
    }
    console.log(codigo); //imprime en consola
    rot13.push(codigo); //lo pone en rot13 para imprimirlo en codigo.txt
    done();
}

//process.stdin.pipe(upperCase).pipe(process.stdout); //para escribir en la terminal
process.stdin.pipe(rot13).pipe(writer); //para escribir en el archivo