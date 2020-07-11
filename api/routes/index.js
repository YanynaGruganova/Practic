var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

let ctrlProfile = require('../controllers/profile');
let ctrlAuth = require('../controllers/authentication');
let ctrlConference = require('../controllers/conferenceController');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//Conferences
router.post('/conferences/create', ctrlConference.createConference);
router.get('/conferences', ctrlConference.getConferences);
router.get('/singleConference', ctrlConference.getSingleConferences);
router.put('/update', ctrlConference.updateConference);
router.delete('/delete/:id', ctrlConference.deleteConference);

module.exports = router;
