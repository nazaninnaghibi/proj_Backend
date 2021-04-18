const { faqVal } = require("../../middleware");
var controller = require('../../controllers/faqController');

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/faq",controller.index);
    app.post(
        "/api/faq",
        [faqVal.checkNullQuestion],
        controller.new);
    // app.get("/api/faq/:faq_id", controller.view);
    // app.patch("/api/faq/:faq_id", controller.update);
    app.put(
        "/api/faq/:faq_id",
        [faqVal.checkNullResponseAndQ],
        controller.update);
    // app.delete("/api/faq/:faq_id", controller.delete);
}