// routes/achievementRoutes.js - THE PROCEDURAL LAW OF THE SUPREME COURT
const express = require('express');
const router = express.Router();
const { conferStatus } = require('../controllers/achievementController');

// The Narrow Path: POST request to confer the Genius status
router.route('/').post(conferStatus);

module.exports = router;