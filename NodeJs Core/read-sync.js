const fs = require('fs');

console.log('Start reading...');

const data = fs.readFileSync('./data/diary.txt', 'utf8');
console.log(data);