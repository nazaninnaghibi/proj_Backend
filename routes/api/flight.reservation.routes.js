var controller = require('../../controllers/flightReservationController');
const { flyVal } = require("../../middleware");

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/reservation/flight", controller.index);
    app.post(
        "/reservation/flight",
        [flyVal.checkDateValue],
        controller.new);
    app.get("/reservation/flight/:flight_id", controller.view);
    app.get("/flight/user/:userid", controller.user);
    app.patch("/reservation/flight/:flight_id", controller.update);
    app.put("/reservation/flight/:flight_id", controller.update);
    app.delete("/reservation/flight/:flight_id", controller.delete);
}