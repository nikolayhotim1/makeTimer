'use strict';
// function handler() {
//     alert(doneMessage);
// }

// function makeTimer(doneMessage, n) {
//     setTimeout(handler, n);
// }

// makeTimer("Cookies are done!", 1000); // Uncaught ReferenceError: doneMessage is not defined at handler (index.js:3)

function makeTimer(doneMessage, n) {
    setTimeout(function handler() {
        console.log(doneMessage);
    }, n);
}

makeTimer("Cookies are done!", 2000); // Cookies are done!
