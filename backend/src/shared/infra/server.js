require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json());

server.get('/hello', (req, res) => {
  return res.json({ message: 'hello world' });
});

server.listen(3333, () => {
  console.log('Server is running on port 3333');
});
