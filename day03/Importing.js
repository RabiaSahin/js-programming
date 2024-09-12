/* NOT RECCOMENDED 

const allUtility = require('./Utility.js');

let result = allUtility.square(9);

console.log(result);

result = allUtility.cube(3);

console.log(result);

result = allUtility.calculate(10, 20, '+');

console.log(result);
*/

// Recomended import specific functions

const {calculate, square} = require('./Utility.js'); // import calculate fonction only

let result = calculate(10, 20, '*');

console.log(result);

result = square(10);
console.log(result);