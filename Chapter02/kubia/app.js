const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

// Handler function for port 8080
var handler8080 = function(request, response) {
  console.log("Received request on port 8080 from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit port 8080 on " + os.hostname() + "\n");
};

// Handler function for port 8081
var handler8081 = function(request, response) {
  console.log("Received request on port 8081 from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit port 8081 on " + os.hostname() + "\n");
};

// Create HTTP server instances
var server8080 = http.createServer(handler8080);
var server8081 = http.createServer(handler8081);

// Listen on ports 8080 and 8081
server8080.listen(8080, function() {
  console.log("Server listening on port 8080");
});

server8081.listen(8081, function() {
  console.log("Server listening on port 8081");
});
