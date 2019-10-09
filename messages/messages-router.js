const express = require('express');
const Messages = require('./messages-model');

const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Messages.findByUserId(id)
        .then(succ => {
            console.log(succ);
            if (succ === undefined) {
                res.status(404).json({ message: "No messages found for this user" });
            } else {
                res.status(200).json(succ);
            }
        })
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
