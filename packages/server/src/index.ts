import express from 'express';
import { magicNumber } from '@root/common';
const server = express();

server.listen(magicNumber, () => {
    console.log('server listening on port', magicNumber);
});
