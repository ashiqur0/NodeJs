const fs = require('fs');

// Synchronous write
const content1 = 'This is a content \nNodeJs is awesome!';

try {
    fs.writeFileSync('./output/test-sync.txt', content1);
    console.log('file written synchronously')
} catch (err) {
    console.error('Error writing file:', err.message);
}