// hotelController.js
// Import hotel model
Hotel = require('../models/hotelModel');
// Handle index actions
exports.index = function (req, res) {
    Hotel.get(function (err, hotel) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Hotel retrieved successfully",
            data: hotel
        });
    });
};
// Handle create hotel actions
exports.new = function (req, res) {
    var hotel = new Hotel();
    hotel.name = req.body.name ? req.body.name : hotel.name;
    hotel.city = req.body.city ? req.body.city : hotel.city;
    hotel.code = req.body.code ? req.body.code : hotel.code;
// save the hotel and check for errors
    hotel.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New hotel created!',
            data: hotel
        });
    });
};
// Handle view hotel info
exports.view = function (req, res) {
    Hotel.findById(req.params.hotel_id, function (err, hotel) {
        if (err)
            res.send(err);
        res.json({
            message: 'Hotel details loading..',
            data: hotel
        });
    });
};
// Handle update hotel info
exports.update = function (req, res) {
    Hotel.findById(req.params.hotel_id, function (err, hotel) {
        if (err)
            res.send(err);
        hotel.name = req.body.name ? req.body.name : hotel.name;
        hotel.city = req.body.city ? req.body.city : hotel.city;
        hotel.code = req.body.code ? req.body.code : hotel.code;
// save the hotel and check for errors
        hotel.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Hotel Info updated',
                data: hotel
            });
        });
    });
};
// Handle delete hotel
exports.delete = function (req, res) {
    Hotel.remove({
        _id: req.params.hotel_id
    }, function (err, hotel) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Hotel deleted'
        });
    });
};
