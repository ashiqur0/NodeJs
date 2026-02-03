const path = require('path');

console.log("Current File Info: ");
console.log('File Name: ', __filename);
console.log("Directory: ", __dirname);

console.log('\n' + '-'.repeat(50) + '\n');

const filePath = '/home/user/docs/Letter.txt';

console.log('Analyze Path: ', filePath + '\n');
console.log('Directory: ', path.dirname(filePath));
console.log('Base name: ', path.basename(filePath));
console.log('File Extension: ', path.extname(filePath));
console.log('File Name: ', path.basename(filePath, path.extname(filePath)));

console.log('\n' + '-'.repeat(50) + '\n');

const parsed = path.parse(filePath);
console.log("File path object: ", parsed);

console.log('\n' + '-'.repeat(50) + '\n');

console.log('Formatted Path: ', path.format(parsed));