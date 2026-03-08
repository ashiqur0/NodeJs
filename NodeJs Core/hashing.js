const crypto = require('crypto');

console.log("\nMD5 Hash: ");
const md5Hash = crypto.createHash('md5').update('password123').digest('hex');

console.log('Input: password123');
console.log('MD5 Hash:', md5Hash);

const sha256Hash = crypto.createHash('sha256').update('password123').digest('hex');
console.log('Input: password123');
console.log('SHA-256 Hash:', sha256Hash);

const sha512Hash = crypto.createHash('sha512').update('password123').digest('hex');
console.log('Input: password123');
console.log('SHA-512 Hash:', sha512Hash);