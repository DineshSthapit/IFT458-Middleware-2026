// loggerMiddleware.js
//hello, its me, I was wondering if after all these years you'd like to meet
function loggerMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

module.exports = loggerMiddleware;