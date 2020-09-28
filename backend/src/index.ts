import express from 'express';
import cors from 'cors';
import routes from './routes';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/workz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
