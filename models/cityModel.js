var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});
// Export City model
var City = module.exports = mongoose.model('city', citySchema);
module.exports.get = function (callback, limit) {
    City.find(callback).limit(limit);
}
