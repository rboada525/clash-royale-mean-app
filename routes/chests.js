var express         = require('express');
var router          = express.Router();
var ChestController = require('../controllers/chestController');

router.get('/chests', ChestController.allChests);
router.get('/chests/:id', ChestController.oneChest);

module.exports = router;
