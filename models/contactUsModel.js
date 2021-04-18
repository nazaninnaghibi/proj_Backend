var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('contactus', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}