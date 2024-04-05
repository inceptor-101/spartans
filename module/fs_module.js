const fs = require('fs');

// for synchronous operations

var readme = fs.readFileSync('./module/readme.text', 'utf8');
fs.writeFileSync('write.text', readme += "raja boy is here");

// for asynchronous operations

fs.readFile('./module/readme.text', 'utf8', (err, data) => {

    fs.writeFile('writeFile.text', data);
    // if (err){
    //     console.log("you got ann error");
    // }
    // else{
    //     console.log(data);
    // }
})