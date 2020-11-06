var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/members_saved", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members_saved.html"));
  });

  app.get("/members_2", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members_2.html"));
  });

  app.get("/members_3", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members_3.html"));
  });

  app.get("/members_4", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members_4.html"));
  });

  app.get("/members_search", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members_search.html"));
  });

};
