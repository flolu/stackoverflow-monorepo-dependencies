import express from 'express';
import { magicNumber, message } from '@root/common';
const server = express();

server.get('**', (req, res) => {
  res.send(message);
});

server.listen(magicNumber, () => {
  console.log('server listening on port', magicNumber);
});
