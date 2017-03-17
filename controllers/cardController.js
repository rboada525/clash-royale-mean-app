var mongoose  = require('mongoose');
var CardModel = require('../models/card');

exports.allCards = function(req, res) {
	CardModel.find({}).sort({ nombre: 1 }).exec(function(err, cards) {
		if (err) res.status(500).json(err);

		res.status(200).json(cards);
	});
};

exports.oneCard = function(req, res) {
	CardModel.findOne({ _id: req.params.id }).populate('arena').exec(function(err, card) {
		if (err) res.status(500).json(err);

		res.status(200).json(card);
	});
};
