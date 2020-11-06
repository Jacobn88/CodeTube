const db = require("../models");
const passport = require("../config/passport");
const axios = require("axios").default;

require("dotenv").config()

module.exports = function(app) {

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.get("/api/search/:search", function(req, res){
    axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=" + req.params.search + "&type=video&videoDefinition=high&key=" + process.env.KEY)
      .then(function(response){
        res.json(response.data);
      })
      .catch(function (error){
        console.log(error);
      })
  })



  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {

      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/videos", function(req, res){
    db.Videos.create({
      url: req.body.url,
      UserId: req.body.user})
        .then(function(dbVideo){
      res.json(dbVideo);
    })
  })

  app.get("/api/videos", function(req, res){
    db.Videos.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(dbVideos){
      res.json(dbVideos);
    })
  })

};
