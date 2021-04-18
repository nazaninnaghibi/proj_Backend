Contact = require('../models/contactUsModel');

exports.index = function (req, res) {
    console.log(":::::::::");
    Contact.get(function (err, contact) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contact retrieved successfully",
            data: contact
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.firstname = req.body.firstname ? req.body.firstname : contact.firstname;
    contact.lastname = req.body.lastname ? req.body.lastname : contact.lastname;
    contact.email = req.body.email ? req.body.email : contact.email;
    contact.phonenumber = req.body.phonenumber ? req.body.phonenumber : contact.phonenumber;
    contact.message = req.body.message ? req.body.message : contact.message;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};