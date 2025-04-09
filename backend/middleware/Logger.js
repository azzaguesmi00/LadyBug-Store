const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);  // Log the request method and URL
    next();  // Proceed to the next middleware or route handler
  };
  
  export default logger;
  