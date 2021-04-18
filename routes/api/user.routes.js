const { authJwt } = require("../../middleware");
const controller = require("../../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/users/index", controller.index);

  app.get("/api/users", controller.index);

  app.post("/api/users", controller.new);

  app.put("/api/users/:user_id", controller.update);

  app.delete("/api/users/:user_id", controller.delete);

  app.get("/api/users/:user_id", controller.users);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
