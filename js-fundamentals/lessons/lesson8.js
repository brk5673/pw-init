// functions

// function declaration
function greetOne() {
    console.log('Hello ');
}

greetOne();

// anonymous function
var greetTwo = function() {
    console.log('Hello ');
}

greetTwo();

// arrow function
var greetThree = () => {
    console.log('Hello ');
}

// function with return value
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));
