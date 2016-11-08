var Usuario = require('../models/').Usuario;

module.exports = {
	//Muestra todos los usuarios
	index(req, res) {
		Usuario.findAll()
			.then(function (usuarios) {
				res.status(200).json(usuarios);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},

	//Devuelve un usuario segun su id
	show(req, res) {
		Usuario.findById(req.params.id)
		.then(function (usuario) {
			res.status(200).json(usuario);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	},

	//Crea un nuevo usuario
	create(req, res) {
		Usuario.create(req.body)
		.then(function (nuevoUsuario) {
			res.status(200).json(nuevoUsuario);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	},

	//Edita un usuario existente
	update(req, res) {
		Usuario.update(req.body, {
			where: {
				id: req.params.id
			}
		})
		.then(function (updatedRecords) {
			res.status(200).json(updatedRecords);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	},

	//Elimina un usuario segun su id
	delete(req, res) {
		Usuario.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function (deletedRecords) {
			res.status(200).json(deletedRecords);
		})
		.catch(function (error){
			res.status(500).json(error);
		});
	}

};