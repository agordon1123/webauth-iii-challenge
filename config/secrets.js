
module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'The truth will set you free',
    environment: process.env.NODE_ENV,
};
