import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import configs from './constants/configs-dev';
import auth from './routes/auth';

const app = express();

/**
 * MongoDB Connect
 */
const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true
};

mongoose.connect(configs.MONGO_URI, mongooseOptions).then(
    () => console.log('MongoDB Connected'),
    err => console.log(err)
);

app.use(bodyParser.json());
app.use('/api/auth', auth);

// app.post('/api/auth', (req, res) => {
//     res.status(400).json({
//         errors: { global: "Invalid credentials" }
//     });
// });

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('API SERVER Running on localhost:8080'));
