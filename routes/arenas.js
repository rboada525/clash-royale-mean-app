var express         = require('express');
var router          = express.Router();
var ArenaController = require('../controllers/arenaController');

router.get('/arenas', ArenaController.allArenas);
router.get('/arenas/:id', ArenaController.oneArena);

module.exports = router;
