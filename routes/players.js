var express          = require('express');
var router           = express.Router();
var PlayerController = require('../controllers/playerController');

router.get('/players', PlayerController.allPlayers);

module.exports = router;
