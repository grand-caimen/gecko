var express = require('express');
var parser = require('body-parser');
var app = express();


app.use(parser.json());

var server = app.listen(3333, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('server listening at localhost:', port);
});

// Serve the client files
app.use(express.static("./../app"));
app.use('/bower_components', express.static('./../bower_components'))


// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
