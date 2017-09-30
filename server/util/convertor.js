var api = require('./api.js');

function checkState(url) {

  var response = api.callApi(url);
  var output = response.split("|");

  if (output[0] == "OK") {
    return ("http://dl" + output[1] + ".downloader.space/dl.php?id=" + output[2]);
  }

  if (output[0] == "ERROR" && (output[1] == 1 || output[1] == 5)) {
    return "ERROR";
  }

  if (output[0] == "DOWNLOAD") {
    return output[2];
  }

  setTimeout(checkState(url), 5000);
}

module.exports = {
  getMP3: function createResponse(req) {
    var query = req.query;
    // console.log(query);
    let videoID = "uQ763VvqiEM";
    let format = "mp3";
    let backendID = Math.floor(Math.random() * 3500000)
    let url = "check.php?v=" + videoID + "&f=" + format + "&h=" + backendID;
    // var response = api.callApi(url);

    return checkState(url);
  }
};
