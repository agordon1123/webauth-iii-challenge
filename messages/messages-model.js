const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    findByUserId,
    add,
    remove
};

function find() {
    return db('user_messages');
};

function findBy() {
    return 
};

function findById(id) {
    return db('user_messages')
        .first()
        .where({ id });
};

function findByUserId(id) {
    return db('user_messages')
        .first()
        .where({ user_id: id });
};

function add(msg) {
    return db('user_messages')
        .insert(msg);
};

function remove(id) {
    return db('')
};
