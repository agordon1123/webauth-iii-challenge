const express = require('express');

const server = express();

server.use('/', (req, res) => {
    res.send(' Api up ')
});

module.exports = server;
