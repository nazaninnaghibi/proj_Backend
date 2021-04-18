var mongoose = require('mongoose');

// var yup = require("yup")

var faqSchema = mongoose.Schema({
    id:{
        type: String,
        required: false,
    },
    question: {
        type: String,
        required: false,
        min: 1
    },
    answer: {
        type: String,
        required: false
    }
});
// Export Faq model
var Faq = module.exports = mongoose.model('faq', faqSchema);
module.exports.get = function (callback, limit) {
    Faq.find(callback).limit(limit);
}
