'use strict';

module.exports = function(sequelize, DataTypes) {
	var Hora = sequelize.define("Hora", {
	  	id: {
	  		primaryKey: true,
	  		type: DataTypes.INTEGER,
	  		autoIncrement: true
	  	},
	    hora: {
	    	type: DataTypes.DATE,
	    	allowNull: false
	    }
	}, {
	    tableName: 'HORAS'
	});
  return Hora;
};