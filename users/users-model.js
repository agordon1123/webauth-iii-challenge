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

function findBy(filter) {
    return db('users')
        .where(filter)
};

function add(newUser) {
    return db('users')
        .insert(newUser)
        .returning('id')
        .then(id => {
            return findById(id[0]);
        });
};

function findById(id) {
    return db('users')
        .first()
        .where({ id })
};
