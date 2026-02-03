const fs = require('fs');

fs.writeFileSync('./output/temp.txt', 'This is a temporary file.');

console.log("Temporary file created.");

// if(fs.existsSync('./output/temp.txt')) {
//     console.log('File exists');

//     fs.unlinkSync('./output/temp.txt');
// }

try {
    fs.unlinkSync('./output/temp.txt');
    console.log('file deleted successfully');
} catch (err) {
    console.error('Error deleting file: ', err.message);
}

// Delete file asynchronously
fs.writeFile('./output/temp-async.txt', 'This is another temporary file.', (err) => {
    if (err) return console.error(err.message);
    console.log('Asynchronous file created.');

    fs.unlink('./output/temp-async.txt', err => {
        if (err) {
            console.error('Error: ', err.message);
        } else {
            console.log("temp2 deleted");
        }
    });
});