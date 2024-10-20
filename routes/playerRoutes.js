const express = require('express');
const { getPlayers } = require('../controllers/playerController');
const router = express.Router();

router.get('https://fantansy-game-backend-1.onrender.com/api/players', getPlayers);

module.exports = router;
