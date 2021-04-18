const { flyVal } = require("../../middleware");
var controller = require('../../controllers/hotelReservationController');

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/hotel", controller.index);
    app.post(
        "/hotel",
        [flyVal.checkDateValue],
        controller.new);
    app.get("/hotel/:hotel_id", controller.view);
    app.get("/reservation/hotel/:userid", controller.user);
    app.patch("/hotel/:hotel_id", controller.update);
    app.put("/hotel/:hotel_id", controller.update);
    app.delete("/hotel/:hotel_id", controller.delete);

}