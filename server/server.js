const http = require('http');
const server = http.createServer((req,res) => {
    // in the console whatever we write in the url along with port will be printed.
    console.log("request was made "+ req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hey I am varun");
});

server.listen(3000, '127.0.0.1');
console.log("you are listening to port 3000");