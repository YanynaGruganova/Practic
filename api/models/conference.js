var mongoose = require( 'mongoose' );

var conferenceSchema = new mongoose.Schema({
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

mongoose.model('Conference', userSchema);