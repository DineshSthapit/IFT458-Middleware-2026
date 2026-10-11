// Student Name: Anthony Wang
// Student ID: 1231995611
// Date 10/11/26

function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
    // Pass to next route handler/middleware
}

module.exports = loggerMiddleware;
