var counter = function(arr){
    console.log(`there are ${arr.length} elements in this array`);
};

var adder = (a, b) => {
    return `The sum of two numbers is ${a+b}`;
};

var e = 2.718;
// module.exports.adder = adder;
// module.exports.counter = counter;
// module.exports.e = e;

// another way

// module.exports.counter = function(arr){
//     console.log(`there are ${arr.length} elements in this array`);
// };

// module.exports.adder = (a, b) => {
//     return `The sum of two numbers is ${a+b}`;
// };

// module.exports.e = 2.718;

// third way

module.exports = {
    counter: counter,
    adder: adder,
    e: e
};
