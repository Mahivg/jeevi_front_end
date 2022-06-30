// function add(num1, num2) {
//     return num1 + num2;
// }

// var add = function(num1, num2) {
//     //
//     //
//     return num1 + num2;
// }

//ES6 => Lambda

var add = (num1, myFunction) => {
    return num1 + myFunction(num1);
}

// var add = (num1, num2) => num1 + num2;

var addTwo = (arg1) => arg1 + 2; // callback

console.log(add(1,addTwo));