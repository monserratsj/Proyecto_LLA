// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'TU_CONEXIÓN_DE_MONGODB_ATLAS';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const teamSchema = new mongoose.Schema({
    name: String,
    region: String,
});

const Team = mongoose.model('Team', teamSchema);

app.get('/teams', async (req, res) => {
    const teams = await Team.find();
    res.json(teams);
});

app.post('/teams', async (req, res) => {
    const newTeam = new Team(req.body);
    await newTeam.save();
    res.json(newTeam);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
