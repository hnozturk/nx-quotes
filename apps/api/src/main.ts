import * as express from 'express';
import { Quotes } from '@quotes/api-interfaces';
import * as serverless from 'serverless-http';

const app = express();

const router = express.Router();

const quotes: Quotes[] = [
  {
    text:
      'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison',
  },
  {
    text: 'You can observe a lot just by watching.',
    author: 'Yogi Berra',
  },
  {
    text: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer',
  },
];

router.get('/', (req, res) => {
  res.send(quotes);
});

app.use('/api', router);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
