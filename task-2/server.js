/**
 * ------------------------------------------------------
 * Task 2
 * Create an HTTP server that listens on port 3000
 * and responds with HTML.
 * ------------------------------------------------------
 */

const http = require("http");

// Create the HTTP server
const server = http.createServer((req, res) => {

    // Set the response header
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    // Send HTML response
    res.end("<h1>Hello Node!!!!</h1>\n");

});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});