var api = require('./api.js');

function checkState(url) {

  while (true) {
    var response = api.callApi(url);
    var output = [];
    if (response) {
      output = response.split("|");
    }
    console.log(response, url);

    if (output[0] == "OK") {
      return ("http://dl" + output[1] + ".downloader.space/dl.php?id=" + output[2]);
    }

    if (output[0] == "ERROR" && (output[1] == 1 || output[1] == 5)) {
      return "ERROR";
    }

    // if (output[0] == "ERROR" && output[1] == "PENDING") {
    //   return setTimeout(function(){ checkState(url) }, 5000);
    // }
    //
    // if (output[0] == "DOWNLOAD") {
    //   return setTimeout(function(){ checkState(url) }, 5000);
    // }
  }
}

module.exports = {
  getMP3: function createResponse(query) {
    console.log('query::', query);
    let videoID = query.videoID || "uQ763VvqiEM";
    let format = "mp3";
    let backendID = Math.floor(Math.random() * 3500000)
    let url = "check.php?v=" + videoID + "&f=" + format + "&h=" + backendID;
    // var response = api.callApi(url);

    return {resultURL: checkState(url)};
  }
};
