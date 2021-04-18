const User = require('../models/user.model');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.users = (req, res)  => {
  User.findById(req.params.user_id, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      message: 'User details loading..',
      data: user
    });
  });
};

exports.delete = (req, res) =>{
  console.log("::::::::::::::::::::::::::::::::::::::", req.params.user_id);
  User.remove({
    _id: req.params.user_id
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Contact deleted'
    });
  });
};

exports.index = (req, res) => {
  User.find({}, function (err, user) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Hotel retrieved successfully",
      data: user
    });
  });
};

exports.new = function (req, res) {
  console.log("::::::::::");
  var user = new User();
  user.username = req.body.username ? req.body.username : user.username;
  user.email = req.body.email ? req.body.email : user.email;
  user.password = req.body.password ? req.body.password : user.password;
// save the user and check for errors
  user.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: 'New user created!',
      data: user
    });
  });
};

exports.update = function (req, res) {
  console.log("OOOOOOOOOOOOOOOOOOreq" + req)

  User.findById(req.params.user_id, function (err, user) {
    if (err)
      res.send(err);
    user.username = req.body.username ? req.body.username : user.username;
    user.email = req.body.email ? req.body.email : user.email;
    user.password = req.body.password ? req.body.password : user.password;
    user.roles = req.body.roles ? req.body.roles : user.roles;
// save the user and check for errors
    user.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'User Info updated',
        data: user
      });
    });
  });

};