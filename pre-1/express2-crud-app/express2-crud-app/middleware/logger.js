const logger = (req, res, next) => {  
    const currentTime = new Date();  
    console.log(`[${currentTime.toISOString()}] ${req.method} ${req.url}`);  
    next();  
  };  
  
  module.exports = logger;