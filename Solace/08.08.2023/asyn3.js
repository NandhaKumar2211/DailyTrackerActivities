const fs = require('fs');

function readFileAsync() {
  fs.readFile('test.txt', 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading file asynchronously:', error);
    } else {
      console.log('Asynchronous data:', data);
    }
  });
}

readFileAsync();
