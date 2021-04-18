var mongoose = require('mongoose');

var hotelReservationSchema = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    hotel: {
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
    count : {
        type: String,
        required: true
    },
    userid : {
        type: String,
        required: true
    }
});
// Export hotelReservation model
var HotelReservation = module.exports = mongoose.model('hotelReservation', hotelReservationSchema);
module.exports.get = function (callback, limit) {
    HotelReservation.find(callback).limit(limit);
}