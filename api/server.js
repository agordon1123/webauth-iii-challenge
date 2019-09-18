const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../users/users-router');
const corsConfig = require('../config/corsConfig');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors(corsConfig));

server.use('/api', userRouter);

module.exports = server;
