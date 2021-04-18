const { contactVal } = require("../../middleware");

var controller = require('../../controllers/contactUsController');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/contactus", controller.index);
    app.post(
        "/contactus",
        [contactVal.checkNullValue],
        controller.new);


}