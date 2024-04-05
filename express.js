// http methods
// 1. Get request
// 2. Post Request
// 3. Put Request 
// 4. Delete Request 

// important points
var json_data;
var express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');

// It is called as middleware
app.use('/styles', express.static('styles'));

// for body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// request with parameters
// never forget to put colons

app.get('/contact', (req, res) => {
    // req.query is used to print the query in console
    res.render('contact', {qs : req.query});
});

app.post('/contact', urlencodedParser, (req, res) => {
    // req.query is used to print the query in console
    json_data= req.body ;
    console.log(req.body);
    res.render('success', {data : req.body});
})

app.get('/', (req,res) => {
    // first variable implies the variable name and second one means the data under it
    res.render('profile');
})

app.listen(3000, '127.0.0.1');
console.log("App is running...........")
