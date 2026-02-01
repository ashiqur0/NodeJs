// commonjs to esm

// const { x: a } = require('./file2');
import { x as a } from './file2.js';

// const { x } = require('./file3');
import { x } from './file3.js';

// const { add } = require('./utils/add');
// const { subtract } = require('./utils/subtract');
// const { add, subtract } = require('./utils');
import utils from './utils_esm/index.mjs';


// console.log(x, a);

console.log('add: ', utils.add(x, a));
console.log('subtract: ', utils.subtract(a, x));

// console.log(a, x)