const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    add,
    remove
};

function find() {
    return db('user_messages');
};

function findBy() {
    return 
};

function findById() {
    return
};

function add(msg) {
    return db('user_messages').insert(msg);
};

function remove() {

};
