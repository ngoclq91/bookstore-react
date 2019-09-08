import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import configs from './constants/configs-dev';

const app = express();

/** PORT NUMBER */
const PORT = process.env.Portal || 5000;

/**
 * MongoDB Connect
 */
mongoose.connect(configs.MONGO_URI, { useNewUrlParser: true})
    .then( () => console.log('MongoDB Connected'))
    .catch( err => console.log(err));

app.post('/api/auth', (req, res) => {
    res.status(400).json({
        errors: { global: "Invalid credentials" }
    });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log(`API SERVER Running on localhost:${PORT}`));
