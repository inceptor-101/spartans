// buffer can be defined as temporary storage for large amount of data when it is being transferred from one place to another

// the whole pathway by which the data is transferred from server to the client is alled as a stream

// in node js we can create a stream to use the property of consuming data even before all of it arrives.

// types of stream
// 1 readable stream; node js can only read data from this stream
// 2 writeable stream; node js can only write data in this stream 
// 3 duplex; node js can do both tasks

// example of readable stream

const http = require('http');
const fs = require('fs');

// advantage of using stream over readfilesync or readfile is that data is transferred in chunks which becomes beneficial for transferring large data.

var creatReadStream = fs.createReadStream(__dirname + '/readme.text', 'utf8');
// var writeStream = fs.createWriteStream(__dirname + '/writeme.text');

// here the commented code and pipe code implies same thing

// creatReadStream.on('data', (chunk) => {
//     console.log("new piece of data arrives");
//     writeStream.write(chunk);
// })

// creatReadStream.pipe(writeStream);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var creatReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    creatReadStream.pipe(res);
})

server.listen(3000, '127.0.0.1');
console.log("Server is running................")