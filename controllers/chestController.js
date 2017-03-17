var mongoose   = require('mongoose');
var ChestModel = require('../models/chest');

exports.allChests = function(req, res) {
	ChestModel.find({}, function(err, chests) {
		if (err) res.status(500).json(err);

		res.status(200).json(chests);
	});
};

exports.oneChest = function(req, res) {
	ChestModel.findOne({ _id: req.params.id }).populate('arena').exec(function(err, chest) {
		if (err) res.status(500).json(err);

		res.status(200).json(chest);
	});
};
