// global objects
// operating withb setInterval and setTimeout functions in js
var time = 0;

greeting = (x) => {
    console.log(`Jugnu jatt has left ${time} seconds ago`);
    time += 2;
    if (time == 8){
        clearInterval(timer2);
    }
}
// // it means timer will be executed every 2000 milliseconds
var timer = setInterval(greeting, 2000);

// // It means timer2 will execute once after 8000 milliseconds but only once.
var timer2 = setTimeout(greeting, 8000);

// __dirname global object
// dirname gives only the name of directory 
console.log(__dirname);

// filename includes the name of the working file also
console.log(__filename);

// ways of defining functions 

function greeting(){
    console.log("Good Morning");
}

// Another method

var greeting = function(){
    console.log("Good night");
}
greeting();

// for exporting




