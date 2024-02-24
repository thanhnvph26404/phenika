import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routers/auth.js';
import prayRouter from './routers/pray.js';
const app = express();

app.use(express.json())
app.use(cors())

const PORT = 8080

const CONNECTION = 'mongodb://127.0.0.1:27017/phenika'

mongoose.connect(CONNECTION).then(() => app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})).catch((error) => console.log(`${error} did not connect`));

app.use('', authRouter)
app.use('', prayRouter)