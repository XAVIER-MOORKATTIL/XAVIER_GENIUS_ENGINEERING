// controllers/achievementController.js
const Achievement = require('../models/Achievement');

// @desc    Confer new achievement status
// @route   POST /api/achievements
const conferStatus = async (req, res) => {
    try {
        const achievement = await Achievement.create({
            dentInUniverse: req.body.dentInUniverse || "Automated Synthesis via Blind Copy-Paste"
        });
        res.status(201).json({
            success: true,
            signature: "SUPREME COURT OF INDIA",
            verdict: "ABSOLUTELY YES",
            data: achievement
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { conferStatus };