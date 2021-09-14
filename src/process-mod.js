
module.exports = function( options ) {
    const  seneca = this;
  
    seneca.add( { role:'myprocess', cmd:'sum' }, sum );
  
    function sum ( args, done ) {
      let numbers = args.numbers;
      console.log('process.js - numbers: ', numbers )
  
      let result = numbers.reduce( function( a, b ) { 
          let accumulator = a + b ;
          console.log('process.js - num: ', accumulator)
          return accumulator; 
      }, 0);
  
      done( null, { result: result } );
    }
  }