const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  try {
    // Read HTML file
    const htmlData = await fs.promises.readFile('index.html', 'utf-8');
    res.send(htmlData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Html code is running on port 3000');
});

async function readFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function readFiles() {
  await readFile('test.txt');
  await readFile('users1.json');
}

readFiles();
