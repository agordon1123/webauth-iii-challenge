const express = require('express');
const Messages = require('./messages-model');

const router = express.Router();

router.get('/', (req, res) => {
    Messages.find()
        .then(succ => res.status(200).json(succ))
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
    const msg = req.body;
    if (!msg.user_id || !msg.sender_user_id || !msg.message) {
        res.status(400).json({ message: 'Bad request' });
    } else {
        Messages.add(msg)
            .then(succ => res.status(201).json(succ))
            .catch(err => res.status(500).json(err));
    };
});

module.exports = router;
