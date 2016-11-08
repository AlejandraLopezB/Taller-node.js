'use strict';

module.exports = function(sequelize, DataTypes) {
	var Usuario = sequelize.define("Usuario", {
	  	id: {
	  		primaryKey: true,
	  		type: DataTypes.INTEGER,
	  		autoIncrement: true
	  	},
	    nombre: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    },
	    apellido: {
	    	type: DataTypes.STRING,
	    	allowNull: false
	    }
	}, {
	    tableName: 'PERSONAS'
	});
  return Usuario;
};
