const loggerMiddleware = require('./loggerMiddleware');
app.use(loggerMiddleware);
//Bryce Pratt

function loggerMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = loggerMiddleware;
//Gio Noyola