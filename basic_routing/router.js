const http = require('http');
const fs = require('fs');
console.log(__dirname);

// routing means serving different html files in a given server;

const server = http.createServer((req, res) => {
    console.log("The url name is: ", req.url);
    if (req.url === '/' || req.url ==='/index'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    if (req.url === '/api'){
        var json = [{name : 'varun', age: 20}, {name : 'nikita', age: 20}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(json));
    }
})

server.listen(3000, '127.0.0.1');
console.log("Listening to port...........");
