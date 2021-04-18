var mongoose = require('mongoose');

var hotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});
// Export Hotel model
var Hotel = module.exports = mongoose.model('hotel', hotelSchema);
module.exports.get = function (callback, limit) {
    Hotel.find(callback).limit(limit);
}
