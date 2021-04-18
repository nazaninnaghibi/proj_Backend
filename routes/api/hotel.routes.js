const { authJwt } = require("../../middleware");
var controller = require('../../controllers/hotelController');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/hotel", controller.index);
    app.post("/api/hotel", controller.new);
    app.get("/api/hotel/:hotel_id", controller.view);
    app.patch("/api/hotel/:hotel_id", controller.update);
    app.put("/api/hotel/:hotel_id", controller.update);
    app.delete("/api/hotel/:hotel_id", controller.delete);

}