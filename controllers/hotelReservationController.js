// HotelReservationController.js
// Import HotelReservation model
HotelReservation = require('../models/hotelReservationModel');
// Handle index actions
exports.index = function (req, res) {
    HotelReservation.get(function (err, hotelReservation) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "HotelReservation retrieved successfully",
            data: hotelReservation
        });
    });
};
// Handle create hotelReservation actions
exports.new = function (req, res) {
    var hotelReservation = new HotelReservation();
    hotelReservation.city = req.body.city ? req.body.city : hotelReservation.city;
    hotelReservation.hotel = req.body.hotel ? req.body.hotel : hotelReservation.hotel;
    hotelReservation.from = req.body.from ? req.body.from : hotelReservation.from;
    hotelReservation.to = req.body.to ? req.body.to : hotelReservation.to;
    hotelReservation.count = req.body.count ? req.body.count : hotelReservation.count;
    hotelReservation.userid = req.body.userid ? req.body.userid : hotelReservation.userid;
// save the hotelReservation and check for errors
    hotelReservation.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New hotelReservation created!',
            data: hotelReservation
        });
    });
};
// Handle view hotelReservation info
exports.view = function (req, res) {
    HotelReservation.findById(req.params.hotelReservation_id, function (err, hotelReservation) {
        if (err)
            res.send(err);
        res.json({
            message: 'HotelReservation details loading..',
            data: hotelReservation
        });
    });
};

exports.user = function (req, res) {
    console.log(":::::::::::"+req.params.userid);
    HotelReservation.find({userid: req.params.userid}, function (err, hotelReservation) {
        if (err)
            res.send(err);
        res.json({
            message: 'HotelReservation details loading..',
            data: hotelReservation
        });
    });
};
// Handle update hotelReservation info
exports.update = function (req, res) {
    HotelReservation.findById(req.params.hotelReservation_id, function (err, hotelReservation) {
        if (err)
            res.send(err);
        hotelReservation.city = req.body.city ? req.body.city : hotelReservation.city;
        hotelReservation.hotel = req.body.hotel ? req.body.hotel : hotelReservation.hotel;
        hotelReservation.from = req.body.from ? req.body.from : hotelReservation.from;
        hotelReservation.to = req.body.to ? req.body.to : hotelReservation.to;
        hotelReservation.count = req.body.count ? req.body.count : hotelReservation.count;
        hotelReservation.userid = req.body.userid ? req.body.userid : hotelReservation.userid;
// save the hotelReservation and check for errors
        hotelReservation.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'HotelReservation Info updated',
                data: hotelReservation
            });
        });
    });
};
// Handle delete hotelReservation
exports.delete = function (req, res) {
    HotelReservation.remove({
        _id: req.params.hotelReservation_id
    }, function (err, hotelReservation) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'HotelReservation deleted'
        });
    });
};
