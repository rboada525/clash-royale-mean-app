var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Arena    = require('../models/arena');

var chestSchema = Schema({
	imagen: String,
	nombre: String,
	orden: Number,
    desbloqueo: {
        tiempo: Number,
        gemas: Number
    },
    oro: {
        min: Number,
        max: Number
    },
    cartas: {
        cantidad: Number,
        minLegendarias: Number,
        minEpicas: Number,
        minEspeciales: Number
    },
	arena: { type : Schema.Types.ObjectId, ref: 'Arena' },
});

var Chest = mongoose.model('Chest', chestSchema);

module.exports = Chest;
