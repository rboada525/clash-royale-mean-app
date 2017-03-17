var express        = require('express');
var router         = express.Router();
var CardController = require('../controllers/cardController');

router.get('/cards', CardController.allCards);
router.get('/cards/:id', CardController.oneCard);

module.exports = router;
