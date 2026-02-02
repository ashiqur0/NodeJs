const fs = require('fs');

// Create or overwrite the log file with an initial entry
fs.writeFileSync('./output/app.log', 'Application started\n');

console.log('file created');

// Append first log entry
const logEntry1 = `${new Date().toISOString()} - User logged in\n`;
fs.appendFileSync('./output/app.log', logEntry1);

// Append second log entry
const logEntry2 = `${new Date().toISOString()} - Data Fetched\n`;
fs.appendFileSync('./output/app.log', logEntry2);

console.log('second log entry appended');