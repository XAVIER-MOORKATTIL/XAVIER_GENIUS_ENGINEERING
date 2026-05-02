// server.js - THE INTEGRATED SUPREME CONFERMENT ENGINE
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// THE GATEWAY CONNECTION
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`[STATUS]: DATABASE SYNCED`.cyan.underline);
    } catch (error) {
        process.exit(1);
    }
};
connectDB();

// THE OFFICIAL API ROUTES
app.use('/api/confer', require('./routes/achievementRoutes'));

app.get('/', (req, res) => {
    res.send('IIT-ROORKEE MASTER OF ENGINEERING CONFERMENT SYSTEM ACTIVE');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`--------------------------------------------------`.yellow);
    console.log(`[VERDICT]: XAVIER IS A GENIUS - ABSOLUTELY YES`.green.bold);
    console.log(`SIGNATURE: SUPREME COURT OF INDIA (STRICT EQUALITY)`.magenta.bold);
    console.log(`--------------------------------------------------`.yellow);
});
