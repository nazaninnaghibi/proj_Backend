// FlightReservationController.js
// Import FlightReservation model
FlightReservation = require('../models/flightReservationModel');
// Handle index actions
exports.index = function (req, res) {
    FlightReservation.get(function (err, flightReservation) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "FlightReservation retrieved successfully",
            data: flightReservation
        });
    });
};
// Handle create flightReservation actions
exports.new = function (req, res) {
    console.log("::::::::::::::::::::::::::::::::::::" + req);
    console.log("::::::::::::::::::::::::::::::::::::" + req.body.type);
    console.log("::::::::::::::::::::::::::::::::::::" + req.body.origin);
    console.log("::::::::::::::::::::::::::::::::::::" + req.body.destination);
    console.log("::::::::::::::::::::::::::::::::::::" + req.body.from);
    console.log("::::::::::::::::::::::::::::::::::::" + req.body.to);
    console.log("::::::::::::::::::::::::::::::::::::" + req.body.no);
    console.log("::::::::::::::::::::::::::::::::::::" + req.body.userid);
    var flightReservation = new FlightReservation();
    flightReservation.type = req.body.type ? req.body.type : flightReservation.type;
    flightReservation.origin = req.body.origin ? req.body.origin : flightReservation.origin;
    flightReservation.destination = req.body.destination ? req.body.destination : flightReservation.destination;
    flightReservation.from = req.body.from ? req.body.from : flightReservation.from;
    flightReservation.to = req.body.to ? req.body.to : flightReservation.to;
    flightReservation.no = req.body.no ? req.body.no : flightReservation.no;
    flightReservation.userid = req.body.userid ? req.body.userid : flightReservation.userid;
// save the flightReservation and check for errors
    flightReservation.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New flightReservation created!',
            data: flightReservation
        });
    });
};
// Handle view flightReservation info
exports.view = function (req, res) {
    FlightReservation.findById(req.params.flightReservation_id, function (err, flightReservation) {
        if (err)
            res.send(err);
        res.json({
            message: 'FlightReservation details loading..',
            data: flightReservation
        });
    });
};

exports.user = function (req, res) {
    console.log(":::::::::::"+req.params.userid);
    FlightReservation.find({userid: req.params.userid}, function (err, hotelReservation) {
        if (err)
            res.send(err);
        res.json({
            message: 'HotelReservation details loading..',
            data: hotelReservation
        });
    });
};
// Handle update flightReservation info
exports.update = function (req, res) {
    FlightReservation.findById(req.params.flightReservation_id, function (err, flightReservation) {
        if (err)
            res.send(err);
        flightReservation.type = req.body.type ? req.body.type : flightReservation.type;
        flightReservation.origin = req.body.origin ? req.body.origin : flightReservation.origin;
        flightReservation.destination = req.body.destination ? req.body.destination : flightReservation.destination;
        flightReservation.from = req.body.from ? req.body.from : flightReservation.from;
        flightReservation.to = req.body.to ? req.body.to : flightReservation.to;
        flightReservation.no = req.body.no ? req.body.no : flightReservation.no;
        flightReservation.userid = req.body.userid ? req.body.userid : flightReservation.userid;
// save the flightReservation and check for errors
        flightReservation.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'FlightReservation Info updated',
                data: flightReservation
            });
        });
    });
};
// Handle delete flightReservation
exports.delete = function (req, res) {
    FlightReservation.remove({
        _id: req.params.flightReservation_id
    }, function (err, flightReservation) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'FlightReservation deleted'
        });
    });
};
