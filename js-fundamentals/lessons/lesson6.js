// conditionals statements

// if statement
// if (condition) {
//     // code to execute if condition is true
// } else {
//     // code to execute if condition is false
// }

// if hour between 6 and 12, it is morning
// if hour between 12 and 18, it is afternoon
// otherwise, it is night

let hour = 14;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good night');
}
