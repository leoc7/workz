import express from 'express';
import cors from 'cors';
import routes from './routes';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Funcionando');
});

mongoose.connect('mongodb://localhost:27017/workz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
