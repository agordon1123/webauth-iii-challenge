const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../users/users-router');
const messagesRouter = require('../messages/messages-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api', userRouter);
server.use('/api/messages', messagesRouter);

module.exports = server;
