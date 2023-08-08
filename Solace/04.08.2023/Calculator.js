// Importing required modules
const express = require('express');
const xml2js = require('xml2js');
const fs = require('fs');

// Creating an Express app
const app = express();
const port = 8080;

// Calculator endpoints
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 + num2;
  res.send(`Addition: ${num1} + ${num2} = ${result}`);
});

app.get('/sub/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 - num2;
  res.send(`Subtraction: ${num1} - ${num2} = ${result}`);
});

app.get('/div/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  if (num2 === 0) {
    res.send('Error: Division by zero is not allowed');
  } else {
    const result = num1 / num2;
    res.send(`Division: ${num1} / ${num2} = ${result}`);
  }
});

// XML parsing endpoint
app.get('/parse-xml', (req, res) => {
  // Read the sample XML file
  const xmlData = fs.readFileSync('sample.xml', 'utf-8');

  // Parse the XML data
  xml2js.parseString(xmlData, (err, result) => {
    if (err) {
      res.send('Error parsing XML');
    } else {
      res.json(result);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
