//loops
// var i = 0;
var hello = 'hi there';

for (var i = 0; i < 5; i++) {
    console.log(hello);
}

// while loop
var i = 0;
while (i < 5) {
    console.log(hello);
    i++;
}

//es6 for loop
for (let i of hello) {
    console.log(i);
}

const numbers = [15, 42, 7, 89, 23, 5, 91, 33];

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min=numbers[i];
    }
    if(numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(`minimum value ${min}`);
console.log(`maximum value ${max}`);
