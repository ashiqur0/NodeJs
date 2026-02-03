const os = require('os');

console.log('System info \n')
console.log('\n' + '-'.repeat(50) + '\n');

console.log('Platform Details: ')
console.log("Platform: ", os.platform());
console.log('Architecture: ', os.arch());
console.log('Type: ', os.type());
console.log("Release: ", os.release());
console.log('Hostname: ', os.hostname());

console.log('\n' + '-'.repeat(50) + '\n');

console.log('CPU Info: ');
const cpus = os.cpus();

console.log('CPU Model: ', cpus[0].model);
console.log('Number cores: ', cpus.length);
console.log('CPU Speed: ', cpus[0].speed, 'MHz');

console.log('\n' + '-'.repeat(50) + '\n');

console.log('Memory Info: ');
console.log('Total Memory: ', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');
console.log('Free Memory: ', (os.freemem() / (1024 ** 3)).toFixed(2), 'GB');

console.log('\n' + '-'.repeat(50) + '\n');
const uptime = os.uptime();

const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);