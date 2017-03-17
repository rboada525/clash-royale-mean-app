var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Arena    = require('../models/arena');

var cardSchema = Schema({
	numero: Number,
	nombre: String,
	calidad: String,
	tipo: String,
	costoElixir: Number,
	descripcion: String,
	imagen: String,
	arena: { type : Schema.Types.ObjectId, ref: 'Arena' },
});

var Card = mongoose.model('Card', cardSchema);

module.exports = Card;
