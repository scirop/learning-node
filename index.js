/*
*
* Primary File for the API
*
*/

// Dependencies

const http = require('http');
const url = require('url');

// Server should respond to all requests with a string

var server = http.createServer(function(req, res){

  // Get the URL and parse it
  var parsedUrl = url.parse(req.url, true);

  // Get the path from that URL
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g,'');

  // Get query string as an object
  var queryStringObject = parsedUrl.query;

  // Get the http method
  var method = req.method.toLowerCase();

  // Send the response
  res.end('Hello World\n');

  // Log the user path
  console.log('Request is received on:'+trimmedPath+' with method: ' + method +' and with these query string parameters', queryStringObject);
})

// Start the server and have it listen to port 3000
server.listen(3000, function(){
  console.log('Listening on port http://localhost:3000');
})
