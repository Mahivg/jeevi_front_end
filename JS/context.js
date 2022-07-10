
// IIFE
(function() { // Anonumous Function
    // Init function context
    var x = 10;
    let y = 12;
    function A() { // attacged to GLobal
        // Own context, Fucntion context
        var x = 11;
        console.log('A ' +  x);
        (function() { // attached to Funciton A context
            // Own context, Fucntion context        
            let z = 13;
            console.log('B ' + z);
        })();    

        for(let x = 1; x < 5 ; x++) {
            console.log(x);
        }
        // B();
    }
        
    A();  //
    const a = 'ad';
    console.log('G ' + x);
})();


(function() { // Anonumous Function
    // Init function context
    var elemt1 = 'asd'; 
})();

// init(); // global variable .. window variale collision



// Variale collision

// B();

// from 1 to 100 
// multiplication of 3 => fizz
// multiplication of 5 => buzz
// mulitplication of both 3 and 5 => fizzbuzz
