const express = require('express');
const router = express.Router();

const { Conference } = require('./../models/conference');

router.get('/', (req, res) => {
    Conference.find((err, conference) => {
        if (!err) {
            res.send(conference);
        } else {
            console.log('Error in Retriving Conference', JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/', (req, res) => {
    const conference = new Conference({
    });
    conference.save((err, conference) => {
        if (!err) {
            console.log('save');
            res.send(conference);
        } else {
            console.log('Error in User save', JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;