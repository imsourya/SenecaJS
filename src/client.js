const seneca = require("seneca")({log: 'silent'});
// const process = require("./process-mod")  // <= this will not work here seneca need to hook like below seneca.use
seneca.use("./process-mod")  
seneca.act( { role: 'myprocess', cmd: 'sum', numbers: [ 1, 2, 3, 30, 100] }, 
( err, result ) => {
        console.log("index.js's (final)  result: ", result );
});