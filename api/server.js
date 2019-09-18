const express = require('express');
const helmet = require('helmet');

const userRouter = require('../users/users-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api', userRouter);

module.exports = server;
