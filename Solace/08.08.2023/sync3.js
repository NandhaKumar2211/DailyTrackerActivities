const fs = require('fs');

function readFileSync() {
  try {
    const data = fs.readFileSync('test.txt', 'utf8');
    console.log('Synchronous data:', data);
  } catch (error) {
    console.error('Error reading file synchronously:', error);
  }
}
readFileSync();