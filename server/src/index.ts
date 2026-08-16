import express from 'express';
import cors from 'cors';
import healthRouter from './routes/health';
import contactRouter from './routes/contact';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/health', healthRouter);

app.use('/contact', contactRouter);

export default app;
