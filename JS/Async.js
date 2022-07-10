
// setTimeout(function, timeout in ms);

var x = 10;
function b() {
    console.log('B called'); 
    x = 200; 
    console.log(`x in B ${x}`);
}


var successFn = () => {
    console.log("A completed. I am executing other logics");
}

var errFn = () => {
    console.log("A execution got error. ");
}


var aFn = () => {
    console.log('A called');
    for(let i =0; i < 3000; i++) {
        console.log("A")
        
    }
    for(let i =0; i < 10; i++) {
        x += i;
        
    }
    console.log(`x in A ${x}`);
    // let success = false;
    // if(success) {
    //     succFn(); // callback
    // } else {
    //     errFn(); // callback
    // }
};

setTimeout(aFn, 3000); // function will be called after given millisecond

// Promises and async and await

// setInterval(aFn, 1000); // that function will be called on every given millisecond

// 0, function() {}
// after completation of A, execute some logic

// a();// it has more logics
// single threaded language
// callback, event queue

b();

