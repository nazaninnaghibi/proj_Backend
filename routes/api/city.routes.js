const { authJwt } = require("../../middleware");
var controller = require('../../controllers/cityController');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/city", controller.index);
    app.post("/api/city", controller.new);
    app.get("/api/city/:city_id", controller.view);
    app.patch("/api/city/:city_id", controller.update);
    app.put("/api/city/:city_id", controller.update);
    app.delete("/api/city/:city_id", controller.delete);

}

