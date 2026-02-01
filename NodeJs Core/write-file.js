const fs = require('fs');

// Synchronous write
const content1 = 'This is a content \nNodeJs is awesome!';

try {
    fs.writeFileSync('./output/test-sync.txt', content1);
    console.log('file written synchronously')
} catch (err) {
    console.error('Error writing file:', err.message);
}

// Asynchronous write
const content2 = 'This is another content \nAsynchronous write in NodeJs!';
fs.writeFile('./output/test-async.txt', content2, (err) => {
    if (err) {
        console.error('Error writing file:', err.message);
    } else {
        console.log('file written asynchronously')
    }
});