const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./users-model');
const generateToken = require('../auth/generateToken');

const router = express.Router();

router.post('/register', (req, res) => {
    const { username, password, department } = req.body;
    if (!username || !password || !department) {
        res.status(401).json({ error: 'Please include the proper request body' })
    } else {
        hash = bcrypt.hashSync(req.body.password, 8);
        req.body.password = hash;

        const token = generateToken(req.body);

        Users.add(req.body)
            .then(() => res.status(201).json({ token }))
            .catch(err => res.status(500).json(err));
    };
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    Users.findBy({ username })
        .first()
        .then(user => {
            const token = generateToken(user);

            if (user && bcrypt.compareSync(password, user.password)){
                res.status(201).json({ token })
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        })
        .catch(err => res.status(500).json(err));
});

router.get('/users', (req, res) => {
    Users.find()
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
