import express from 'express';
import cors from 'cors';
import router from './routes/health';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/health', router);

app.listen(3002, () => {
  console.log('Server running on http://localhost:3002');
});
