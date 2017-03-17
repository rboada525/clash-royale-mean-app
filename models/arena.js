var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Card     = require('../models/card');
var Chest    = require('../models/chest');

var arenaSchema = Schema({
	numero: Number,
	imagen: String,
	nombre: String,
	minTrofeos: Number,
	oroVictoria: Number,
	clan: {
		pide: {
			comun: Number,
			especiales: Number
		},
		dona: {
			comun: Number,
			especiales: Number
		}
	},
	desbloquea: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
	recompensas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chest' }]
});

var Arena = mongoose.model('Arena', arenaSchema);

module.exports = Arena;
