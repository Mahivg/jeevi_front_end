// var myPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         for(let i =0; i < 1000; i ++) {
//             console.log(`A`);
//         }
//         console.log('calling Resolve ');
//         // resolve('Data');
//         reject('error in async code..')
//     }, 300);
//     //reject('Error happened');
// });

// function createPromise() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             for(let i =0; i < 1000; i ++) {
//                 console.log(`A`);
//             }
//             console.log('calling Resolve ');
//             // resolve('Data');
//             reject('error in async code..')
//         }, 300);
//         //reject('Error happened');
//     });
// }

// var fnPro = createPromise();
// myPromise.then(function(response) {
//     console.log('Then called');
//     console.log(response);

// }).catch(function(err){
//     console.log('Error called');
//     console.log(err);
// });
// function B() {
//     console.log('B Called');
// }
// B();

function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('I woke up');
            resolve('Woke up');
        }, 1000);
    });
}

function brushUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Doing brushing');
            resolve('Brushed up');
        }, 1000);
    });
}


function haveCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Having Coffee');
            resolve('Had Coffee');
        }, 1000);
    });
};

// var wakeUpPromise =  wakeUp();
// wakeUp.then()
console.log('waking..');
wakeUp().then((res) => {
    console.log(res);
    brushUp().then(bres => {
        console.log(`${res} ${bres}`);
        haveCoffee().then(cRes => {
            console.log(`${res} ${bres} ${cRes}`);
        });
    });
});

var wakeUpConfirmed = wakeUp().then((res) => {
    return brushUp();
}).catch(err => {
    console.log(err);
});
var brushedUpConfirm = wakeUpConfirmed.then(bres => {
    return haveCoffee();
});

brushedUpConfirm.then(bres => {
    console.log('All done');
});

console.log('Done');






