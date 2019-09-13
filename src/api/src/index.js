import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import auth from './routes/auth';

dotenv.config();

const app = express();

/**
 * MongoDB Connect
 */
const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true
};

mongoose.connect(process.env.MONGODB_URL, mongooseOptions).then(
    () => console.log('MongoDB Connected'),
    err => console.log(err)
);

app.use(bodyParser.json());
app.use('/api/auth', auth);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('API SERVER Running on localhost:8080'));
