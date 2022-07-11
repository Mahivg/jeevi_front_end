// ? to indicate optional

var a = 'String';

var b = a.length; // cannot read length from undefined or null

if(a) {
    b = a.length;
}

b = a?.length; // if a is there then do next operaiton // null check

var c;

if(a) {
    c = a;
} else {
    c = b;
}

// ternaryoperation

var c = (a != null) ? a : b; // ternary operator

var c = a || b; // Short form 

// a && b

// same && same => true
// same && diff => false

var d = {
a : 'test',
b: 'teast'
}

// Object.keys(d) => ['a','b'];
// Object.values(d) => ['test', 'teast'];

var f = Object.assign({}, d);
// f => { a: } // in seperate memory

// Math.random() => 0.22132

// Math.random(1,10)

// Math.min(10,11,1291,181) => 10

// Math.max(19,1910,1001) => 1910

// Math.PI => 3.14


// Date

// new Date() => browser current date

// Window => alert, window.open('https://www.google.com')

var v = { id: 1, name: 'Jeevi' };

var vArray = [1,2,3,4];
// destructing

// var id = v.id;
// var name = v.name;

var { id, name } = v;

var [a, b,c,d] = vArray;

console.log( 'id ' + id + "__" + name);
console.log(a, b, c, d);

//  spread opertor
var ab = { id : 1 };

var bc = { id : 1, name : 'Jeevi'};


var cd = { ...ab , name: "arasu"};

console.log(cd);

var bbb = [1,2,3,3];

var bbbb = [...bbb, 4,5]; // [1,2,3,3, 4, 5]


var de = { ...ab }; // creating exact copy with different memory

var bbbbb = [...bbb] // create a new copy

// shallow copy and deep copy

var ob = { id: 1};
var ob1 = ob; // shallow copy 
var ob2 = { ...ob }; // deep copy

console.log(ob1);
console.log(ob2);
ob.id = 2;
console.log(ob1);
console.log(ob2);
// Rest

function aaaa(...args) { // [1,2,3,4,5,6,,7,7]
    console.log(args);
    // console.log(num1 + num2 + num3);
}

aaaa(1,2,4,5,6,6,7,7);
// grade system => show percentage and Grade for a SEM
