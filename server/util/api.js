var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
module.exports = {
  //Calls the api using GET method and returns the JSON response
  callApi: function(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", process.env.api || "http://api.convert2mp3.cc/" + url, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    return (xhttp.responseText);
  }
};
