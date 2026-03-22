// app.js
// This is the main Express application file
// It configures all the middleware and API routes
// NOTE: This backend is API-only (no views)
// React Native mobile app connects to these API endpoints

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Custom logger middleware
const loggerMiddleware = require('./custom-middlewares/loggerMiddleware');

const app = express();

// 1) GLOBAL MIDDLEWARES

// Enable CORS so React Native app can make requests to this server
app.use(cors());

// Custom logger middleware
app.use(loggerMiddleware);

// Log the request to the console in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Parse cookies
app.use(cookieParser());

// 2) ROUTES API for Users
const userRouter = require('./routes/userRoutes');
app.use(`${process.env.API_VERSION}/users`, userRouter);

// 3) ROUTES API for Books
const booksRoutes = require('./routes/bookRoutes');
app.use(`${process.env.API_VERSION}/books`, booksRoutes);

// 4) Landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;