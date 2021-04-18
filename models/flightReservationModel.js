var mongoose = require('mongoose');

var flightReservationSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    no : {
        type: String,
        required: true
    },
    userid : {
        type: String,
        required: true
    }
});
// Export flightReservation model
var FlightReservation = module.exports = mongoose.model('flightReservationModel', flightReservationSchema);
module.exports.get = function (callback, limit) {
    FlightReservation.find(callback).limit(limit);
}