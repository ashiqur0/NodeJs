const { x: a } = require('./file2');
const { x } = require('./file3');
// const { add } = require('./utils/add');
// const { subtract } = require('./utils/subtract');
// console.log(x, a);
const { add, subtract } = require('./utils');

console.log('add: ', add(x, a));
console.log('subtract: ', subtract(a, x));