var mongoose    = require('mongoose');
var PlayerModel = require('../models/player');

exports.allPlayers = function(req, res) {
	PlayerModel.find({}, function(err, players) {
		if (err) res.status(500).json(err);

		res.status(200).json(players);
	});
};
