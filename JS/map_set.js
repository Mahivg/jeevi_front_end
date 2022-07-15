var myMap = new Map(); // {}

var myObj = {
    id:1,
    name: 'Jeevi',
    decription: 'test'
};

delete myObj['decription'];

console.log(myObj);


myMap.set('id', 1);
myMap.set('name', 'Jeevi');


console.log(myMap);

var keys = Object.keys(myObj); // ['id', 'name']

if(keys.includes('id')) {}

if(myObj['id']) {}

if(myMap.get('id') != null) {

}

if(myMap.has('id')) {

}

myMap.delete('id');

var b = 'accdssscssxsxsxs';

var alphas = b.split('');

var alphaMap = new Map();

for(let i = 0; i < alphas.length; i++) {
    let alpha = alphas[i];
    if(alphaMap.has(alpha)) {
        let currentCount = alphaMap.get(alpha);
        alphaMap.set(alpha, currentCount + 1);
    } else {
        alphaMap.set(alpha, 1);
    }
}

alphaMap.forEach((value, key, map) => {
    console.log(`Alpha ${key} is present at ${value} times`);
});

var myArr = [1,2,3,4,5,6,7,8,9,9,9,9];

console.log(myArr);

var mySetArr = new Set(myArr);

mySetArr.forEach(() => {
    console.log(`${value} - ${value1}`);
})

console.log(mySetArr);

