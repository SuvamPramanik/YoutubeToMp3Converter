module.exports = {
  getMP3: function createResponse(req) {
    var query = req.query;
    console.log(query);

    return query;
  }
};
