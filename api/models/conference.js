var mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

// Define collection and schema
let Conference = new Schema({
    title: {
        name: { type: String },
        abbreviation: { type: String },
        tags: { type: Array }
    },
    founders: { type: Array },
    timeDate: {
        timeStart: { type: String },
        dateStart: { type: String },
        timeEnd: { type: String },
        dateEnd: { type: String }
    },
    locations: { type: Array },
    directions: { type: Array },
    compositionOfCommittees: { type: Array },
    conferenceStages: { type: Array },
    termsOfParticipation: { type: Array },
    requirements: {
        fieldname: { type: String },
        originalname: { type: String },
        encoding: { type: String },
        mimetype: { type: String },
        destination: { type: String },
        filename: { type: String },
        path: { type: String },
        size: { type: Number }
    },
    sections: { type: Array }
});

module.exports = mongoose.model('Conference', Conference)

// var conferenceSchema = new mongoose.Schema({
//     title: {
//          type: String
//     },
//     founders: { type: Array },
//     timeDate: {
//         timeStart: { type: String },
//         dateStart: { type: String },
//         timeEnd: { type: String },
//         dateEnd: { type: String }
//     },
//     locations: { type: Array },
//     directions: { type: Array },
//     compositionOfCommittees: { type: Array },
//     conferenceStages: { type: Array },
//     termsOfParticipation: { type: Array },
//     requirements: {
//         fieldname: { type: String },
//         originalname: { type: String },
//         encoding: { type: String },
//         mimetype: { type: String },
//         destination: { type: String },
//         filename: { type: String },
//         path: { type: String },
//         size: { type: Number }
//     },
//     sections: { type: Array }
// });
//
// mongoose.model('Conference', conferenceSchema);

// module.exports = mongoose => {
//     const Conference = mongoose.model(
//         "conference",
//         mongoose.Schema(
//             {
//                 title: {
//                     type: String
//                 },
//                 founders: { type: Array },
//                 timeDate: {
//                     timeStart: { type: String },
//                     dateStart: { type: String },
//                     timeEnd: { type: String },
//                     dateEnd: { type: String }
//                 },
//                 locations: { type: Array },
//                 directions: { type: Array },
//                 compositionOfCommittees: { type: Array },
//                 conferenceStages: { type: Array },
//                 termsOfParticipation: { type: Array },
//                 requirements: {
//                     fieldname: { type: String },
//                     originalname: { type: String },
//                     encoding: { type: String },
//                     mimetype: { type: String },
//                     destination: { type: String },
//                     filename: { type: String },
//                     path: { type: String },
//                     size: { type: Number }
//                 },
//                 sections: { type: Array }
//             }
//         )
//     );
//
//     return Conference;
// };
