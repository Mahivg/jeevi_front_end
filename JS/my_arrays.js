function init() {
    var numArray = [1,2,3,4,5,6,7,8,9,10];

console.log(numArray.length);

// default methods supported in array object

// Adding an element

console.log(numArray);

numArray.push(11);

console.log(numArray);

//read 0 to array.length -1
console.log(numArray[1]);

// remove an element

numArray.pop();
// it will remove element in (numArray.length -1)

console.log(numArray); // abc

console.log(numArray.slice(1, 3)); // xyz


console.log(numArray.splice(numArray.length - 1, 1))
console.log(numArray);

// Iterating
// loop

// for(let i = 0; i < numArray.length - 1; i = i+2) {
//     console.log(numArray[i]);
// }

var studArray = [{
    name: 'Test',
    age: 10
}];

// for(let stud in studArray) {
//     // console.log(`${objKey} - ${stud[objKey]}`);
//     console.log(stud);
// }


// for(let num in numArray) {
//     console.log(num);
// }


// it should be iterated completely
numArray.forEach((num) => {
    console.log(num);
});

var i = 0;

// while(i < numArray.length) {
//     console.log(numArray[i]);
//     i++;
// }

do {
    console.log(numArray[i]);
    i++;
} while(i < numArray.length);


// Finding elements

// const numFind = numArray.find(function(num) {
//     return num == 1;
// });

const numFind = numArray.find((num) =>  num == 1 );

// null or undefined
console.log(numFind);

// finding index of an element


const elemIndex = numArray.findIndex(function(num){
    return num == 11;
});
// return index if condition becomes true or else it will return -1
if(elemIndex == -1) {
    console.log("Element not found in that array");
} else {
    console.log(elemIndex);
}

// Array Modification, current array will be changed to New array

// i want to find even numbers
    
var evenArray = numArray.filter(function(num){
    return (num % 2 == 0);
});

console.log(evenArray);
console.log(numArray);


// Map, convert array to new a new form
//[1,2,3,4,5,6,7,8,9,10]
var mappedArray = numArray.map((num) => {
    if(num % 2 == 0) {
        return num + "_even";
    } else {
        return num + "_odd";
    }
});

console.log(mappedArray);

}


init();






