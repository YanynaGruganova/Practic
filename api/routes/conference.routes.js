// module.exports = app => {
//     const conferences = require("../controllers/conferenceController.js");
//
//     var router = require("express").Router();
//
//     // Create a new Conference
//     router.post("/create", conferences.create);
//
//     // Retrieve all Conferences
//     router.get("/findAll", conferences.findAll);
//
//     // Retrieve all published Conferences
//     router.get("/published", conferences.findAllPublished);
//
//     // Retrieve a single Conference with id
//     router.get("/:id", conferences.findOne);
//
//     // Update a Conference with id
//     router.put("/:id", conferences.update);
//
//     // Delete a Conference with id
//     router.delete("/:id", conferences.delete);
//
//     // Delete all Conferences from the database.
//     router.delete("/", conferences.deleteAll);
//
//     //app.use('/api/conferences', router);
// };

const express = require('express');
const app = express();
const conferenceRoute = express.Router();

// Conference model
let Conference = require('../models/conference');

// Add Conference
conferenceRoute.route('/create').post((req, res, next) => {
    Conference.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All Conference
conferenceRoute.route('/').get((req, res) => {
    Conference.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single Conference
conferenceRoute.route('/read/:id').get((req, res) => {
    Conference.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Conference
conferenceRoute.route('/update/:id').put((req, res, next) => {
    Conference.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// Delete Conference
conferenceRoute.route('/delete/:id').delete((req, res, next) => {
    Conference.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = conferenceRoute;