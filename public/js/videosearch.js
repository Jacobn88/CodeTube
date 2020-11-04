const axios = require("axios");

function getVideos () {
    axios
  .get("")
  .then(function(res) {
    console.log(res.data);
  });
}