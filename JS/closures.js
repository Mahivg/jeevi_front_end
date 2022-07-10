var x = 10;

var add = function (num1, num2) {
    return num1 + num2 + x;
}

console.dir(add);

var sum = add(10, 11);
console.log(sum);


var add = function(num1) { // add  stores this function ref
    
    return function(num2) {
        return num1 + num2;
    }
    // closure means outcontext value stored in inner context // Isolation
}

var addTwo = add(2); // function which return 2 + num2 // function becomes stateful, maintains a data // closure

console.dir(addTwo); // value 2

var addtwosum = addTwo(5); // return 2 + 5

var addThree = add(3); // funciton which return 3 + num2

var addFour = add(4);

console.dir(addThree); // value 2

var addThreeTotal = addThree(11); // return 3 + 11

//anjkasndkasksakdjsajkdhkjashdkjasnxjkasnxkjsankxnskaj
// use object concept

// print a = 10, n= 11, j= 11