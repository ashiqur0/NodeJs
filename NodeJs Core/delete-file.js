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