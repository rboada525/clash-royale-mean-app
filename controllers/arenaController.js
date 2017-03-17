var mongoose   = require('mongoose');
var ArenaModel = require('../models/arena');

exports.allArenas = function(req, res) {
	ArenaModel.find({}).sort({ numero: 1 }).exec(function(err, arenas) {
		if (err) res.status(500).json(err);

		res.status(200).json(arenas);
	});
};

exports.oneArena = function(req, res) {
	ArenaModel.findOne({ _id: req.params.id }).populate(['desbloquea', 'recompensas']).exec(function(err, arena) {
		if (err) res.status(500).json(err);

		res.status(200).json(arena);
	});
};
