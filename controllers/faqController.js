Faq = require('../models/faqUsModel');
body  = require('express-validator/check')

exports.validate = (method) => {
    switch (method) {
        case 'createUser': {
            return [
                body('question', 'Question is not empty').exists(),

            ]
        }
    }
}

exports.index = function (req, res) {
    Faq.get(function (err, faq) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Faq retrieved successfully",
            data: faq
        });
    });
};
// Handle create faq actions
exports.new = function (req, res) {
    console.log("::::::" + req.body.question + "" + req.body.answer);
    var faq = new Faq();
    faq.question = req.body.question ? req.body.question : faq.question;
    faq.answer = req.body.answer ? req.body.answer : faq.answer;
// save the faq and check for errors
    faq.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New faq created!',
            data: faq
        });

    });
};
// Handle view faq info
exports.view = function (req, res) {
    Faq.findById(req.params.faq_id, function (err, faq) {
        if (err)
            res.send(err);
        res.json({
            message: 'Faq details loading..',
            data: faq
        });
    });
};
// Handle update faq info
exports.update = function (req, res) {
    console.log(":::::::" + req);
    Faq.findById(req.params.faq_id, function (err, faq) {
        if (err)
            res.send(err);
        faq.question = req.body.question ? req.body.question : faq.question;
        faq.answer = req.body.answer ? req.body.answer : faq.answer;
// save the faq and check for Faqerrors
        faq.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Faq Info updated',
                data: faq
            });
        });
    });
};
// Handle delete faq
exports.delete = function (req, res) {
    Faq.remove({
        _id: req.params.faq_id
    }, function (err, faq) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Faq deleted'
        });
    });
};
