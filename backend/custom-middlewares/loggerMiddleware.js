//simple logger middleware
function logger(req, res, next){
    const time = new Date().toISOString();
    console.log('[${time}] ${req.method} ${req.url}');
    next();
}

// Export the middleware functions so they can be used in routes
module.exports = logger;
