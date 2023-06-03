const notFoutd = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // this will be handled by the error handler middleware
};

const errorHandler = (err, req, res, next) => {
  // sometimes we get 200 status code even if there is an error
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = err.message;

  if ((err.message = "CastError" && err.kind == "objectId")) {
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode);
  res.json({
    message: err.message,
    // if we are in development mode, we want to see the stack trace
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFoutd, errorHandler };
