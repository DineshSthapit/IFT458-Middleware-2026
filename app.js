// Student Name: Jared Esquibel
// Student ID: 1227317665
// Date: 03/22/2026

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Integrate middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
}); 
//Gio Noyola