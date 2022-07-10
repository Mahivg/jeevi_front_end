
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
            // resolve('Brushed up');
            reject('No Tooth paste');
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
// console.log('waking..');
// wakeUp().then((res) => {
//     console.log(res);
//     brushUp().then(bres => {
//         console.log(`${res} ${bres}`);
//         haveCoffee().then(cRes => {
//             console.log(`${res} ${bres} ${cRes}`);
//         });
//     });
// });

async function A() {
    try { // exception handling
        let wakeUpConfirm = await wakeUp(); // Prmoise Ends
        console.log(`${wakeUpConfirm} `);
        // Async and await handles asyncronius e xecution in synchronious way
        let brushUpConfrim = await brushUp();
        console.log(`${wakeUpConfirm}  ${brushUpConfrim} `);

        let coffeeConfirm = await haveCoffee();    // 

        console.log(`${wakeUpConfirm}  ${brushUpConfrim} ${coffeeConfirm} `);

    } catch(err) {
        console.log('Error !!!!');
        console.log(err);
    }
}

A();

console.log('Done');




// function B() {
//     setTimeout
// }

// function C() {

// }


// //making executiuon as asyncrnous
// //line
// B(); // code exec moved to call back queue
// C();// code exec moved to call back queue
// D();// code exec moved to call back queue
// E();// code exec moved to call back queue


// //line

// //

