const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const corsConfig = require('../config/cors-config');

const userRouter = require('../users/users-router');
const messagesRouter = require('../messages/messages-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors(corsConfig));

server.use('/api', userRouter);
server.use('/api/messages', messagesRouter);

module.exports = server;
