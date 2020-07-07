const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');
let Conference = mongoose.model('Conference');

//Create Conference
module.exports.createConference = (req, res, next) => {
    console.log(req.body)
    Conference.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}

// Get All Conference
module.exports.getConferences = (req, res) => {
    Conference.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}

// Get single Conference
module.exports.getSingleConferences = (req, res) => {
    Conference.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}

// Update Conference
module.exports.updateConference = (req, res, next) => {
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
}

// Delete Conference
module.exports.deleteConference = (req, res, next) => {
    Conference.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
}
























//const { Conference } = require('./../models/conference');

// router.get('/', (req, res) => {
//     Conference.find((err, conference) => {
//         if (!err) {
//             res.send(conference);
//         } else {
//             console.log('Error in Retriving Conference', JSON.stringify(err, undefined, 2));
//         }
//     });
// });
//
// router.post('/', (req, res) => {
//     const conference = new Conference({
//     });
//     conference.save((err, conference) => {
//         if (!err) {
//             console.log('save');
//             res.send(conference);
//         } else {
//             console.log('Error in User save', JSON.stringify(err, undefined, 2));
//         }
//     });
// });
//
// module.exports = router;

//const db = require('../models/conference');
//const Conference = db.conferences;


//Start
// Create and Save a new Conference
// module.exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.title) {
//         res.status(400).send({ message: "Content can not be empty!" });
//         return;
//     }
//
//     // Create a Conference
//     const conference = new Conference({
//         title: req.body.title,
//         founders: req.body.founders,
//         timeDate: req.body.timeDate,
//         locations: req.body.locations,
//         directions: req.body.directions,
//         compositionOfCommittees: req.body.compositionOfCommittees,
//         conferenceStages: req.body.conferenceStages,
//         termsOfParticipation: req.body.termsOfParticipation,
//         requirements: req.body. requirements,
//         sections: req.body.sections
//     });
//
//     // Save Conference in the database
//     conference
//         .save(conference)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the Conference."
//             });
//         });
// };
//
// // Retrieve all Conference from the database.
// module.exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
//
//     Conference.find(condition)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving conferences."
//             });
//         });
// };
//
// // Find a single Conference with an id
// module.exports.findOne = (req, res) => {
//     const id = req.params.id;
//
//     Conference.findById(id)
//         .then(data => {
//             if (!data)
//                 res.status(404).send({ message: "Not found Conference with id " + id });
//             else res.send(data);
//         })
//         .catch(err => {
//             res
//                 .status(500)
//                 .send({ message: "Error retrieving Conference with id=" + id });
//         });
// };
//
// // Update a Conference by the id in the request
// module.exports.update = (req, res) => {
//     if (!req.body) {
//         return res.status(400).send({
//             message: "Data to update can not be empty!"
//         });
//     }
//
//     const id = req.params.id;
//
//     Conference.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//         .then(data => {
//             if (!data) {
//                 res.status(404).send({
//                     message: `Cannot update Conference with id=${id}. Maybe Conference was not found!`
//                 });
//             } else res.send({ message: "Conference was updated successfully." });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Conference with id=" + id
//             });
//         });
// };
//
// // Delete a Conference with the specified id in the request
// module.exports.delete = (req, res) => {
//     const id = req.params.id;
//
//     Conference.findByIdAndRemove(id)
//         .then(data => {
//             if (!data) {
//                 res.status(404).send({
//                     message: `Cannot delete Conference with id=${id}. Maybe Conference was not found!`
//                 });
//             } else {
//                 res.send({
//                     message: "Conference was deleted successfully!"
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Conference with id=" + id
//             });
//         });
// };
//
// // Delete all Conferences from the database.
// module.exports.deleteAll = (req, res) => {
//     Conference.deleteMany({})
//         .then(data => {
//             res.send({
//                 message: `${data.deletedCount} Conferences were deleted successfully!`
//             });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all conferences."
//             });
//         });
// };
//
// // Find all published Conferences
// module.exports.findAllPublished = (req, res) => {
//     Conference.find({ published: true })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving conferences."
//             });
//         });
// };