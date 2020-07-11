var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
let Conference = require('../models/conference');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User();
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.patronymic = req.body.patronymic;
  user.email = req.body.email;
  user.placeWork = req.body.placeWork;
  user.position = req.body.position;
  user.academicDegree = req.body.academicDegree;
  user.academicRank = req.body.academicRank;

  user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });

};

module.exports.createConference = function(req, res, next) {
  console.log('request:', req.body)
  console.log('Conference:', Conference)
  Conference.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}

module.exports.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};