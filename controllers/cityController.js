// cityController.js
// Import city model
City = require('../models/cityModel');
// Handle index actions
exports.index = function (req, res) {
    City.get(function (err, city) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "City retrieved successfully",
            data: city
        });
    });
};
// Handle create city actions
exports.new = function (req, res) {
    var city = new City();
    city.name = req.body.name ? req.body.name : city.name;
    city.code = req.body.code ? req.body.code : city.code;
// save the city and check for errors
    city.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New city created!',
            data: city
        });
    });
};
// Handle view city info
exports.view = function (req, res) {
    City.findById(req.params.city_id, function (err, city) {
        if (err)
            res.send(err);
        res.json({
            message: 'City details loading..',
            data: city
        });
    });
};
// Handle update city info
exports.update = function (req, res) {
    City.findById(req.params.city_id, function (err, city) {
        if (err)
            res.send(err);
        city.name = req.body.name ? req.body.name : city.name;
        city.code = req.body.code ? req.body.code : city.code;
// save the city and check for errors
        city.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'City Info updated',
                data: city
            });
        });
    });
};
// Handle delete city
exports.delete = function (req, res) {
    City.remove({
        _id: req.params.city_id
    }, function (err, city) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'City deleted'
        });
    });
};
