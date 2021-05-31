import express from 'express';
import Freshsales from './services/Freshsales/routes';

const app = express();
const port = process.env.PORT || 5000;

app.use(Freshsales);

app.listen(port, () => console.log(`Listening on port ${port}!`));
