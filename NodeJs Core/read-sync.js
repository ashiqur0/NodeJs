const fs = require('fs');

console.log('Start reading...');

try {
    const data = fs.readFileSync('./data/diary.txt', 'utf8');
    console.log("File Content: ")
    console.log(data);
} catch (err) {
    console.error('Error reading file:', err.message);
}

console.log("Finished reading...");