// Student Name: Anthony Wang
// Student ID: 1231995611
// Date 10/11/26

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware registered
app.use(loggerMiddleware);

// Ex route
app.get('/', (req, res) => {
  res.send('Hello, this is for Module 5 Labs!');
});

// Port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});