const server = require('./api/server');

const port = process.env.port || 5400;

server.listen(port, () => console.log(`*** server listening on port ${port} ***`));
