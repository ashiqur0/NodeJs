const fs = require('fs');

console.log('Start reading...');

const data = fs.readFile('./data/diary.txt', 'utf8', (error, data) => {
    if (error) {
        console.error("Error reading file:", error.message);
    } else {
        console.log('File Content:');
        console.log(data);
    }
});

console.log('This runs immediately - no blocking');