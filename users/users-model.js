const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    add,
    findById
}

function find() {
    return db('users')
        .select('id', 'username', 'department')
};

function findBy(id) {
    return db('users')
        .where(id)
};

function add(newUser) {
    return db('users')
        .insert(newUser)
};

function findById(id) {
    return db('users')
        .first()
        .where({ id })
};
