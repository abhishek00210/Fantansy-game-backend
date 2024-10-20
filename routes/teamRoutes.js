const express = require('express');
const { createTeam, getTeamById } = require('../controllers/teamController');
const router = express.Router();

router.post('https://fantansy-game-backend-1.onrender.com/api/teams', createTeam);
router.get('/teams/:id', getTeamById);

module.exports = router;
