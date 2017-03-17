var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var playerSchema = Schema({
	nivel: Number,
	maxExp: Number,
	torresArena: {
        puntosVida: Number,
        alcance: Number,
        danio: Number,
        velocAtaque: Number
    },
    torreRey: {
        puntosVida: Number,
        alcance: Number,
        danio: Number,
        velocAtaque: Number
    }
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
