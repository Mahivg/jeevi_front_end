const name = "magesh";

console.log(name);


print(11, 112);
var add = function(num1, num2) {
 console.log(num1 + num2);
}

add(1,2);
add(2,3);

function print(num1 , num2) {
    console.log(`${num1}_${num2}
        Multi line

        str
    `);
}
/*
function add(num1, num2) {
    console.log(num1 + num2);
}

*/

var str1 = "myStr";
console.log(str1);

// Type conversion


var numStr = "100";

console.log(+numStr);


var obj1 = {
    id: "std01",
    name: 'student1',
    batch: 2020
}; // JSON

var obj2 = {
    id: "std01",
    name: 'student1',
    batch: 2020
}

// window has 2 method for JSOn

var jsonString = JSON.stringify(obj1);

console.log(JSON.stringify(obj1));
console.log(JSON.parse(jsonString));

console.log(obj1 == obj2);

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));


console.log(10 / 1 );
//concar strstr1

