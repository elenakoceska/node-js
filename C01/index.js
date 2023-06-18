var test = "test";

function testFunc() {
    var test = "this is new value";
};

var thisIsRef = testFunc;
thisIsRef(); // ja povikuvame


/// zadaca1

function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(5, 2));


let sum = (num1, num2) => {
     return num1 + num2
};
console.log(sum(2, 3));


const sum2 = function (num1, num2) {
     return num1 + num2;
}
console.log(sum2(3, 5));