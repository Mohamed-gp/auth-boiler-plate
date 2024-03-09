import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
// the default of express send html but we went to send a json response so if we throw and error it woldn't send as html error
// this to catch no found page error
const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// we can decalare err as any
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // 200 because if we throw a manuel error the status is 200 but we dont want for the error to be 200 so we change it to 500
  let statusCode = req.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  // mongosee have default thing in error so we handle it if for example the if doesn't exist
  if (err.name == "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource Not Found";
  } 
  res.status(statusCode as number).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // error stack show us the place of error which line we don't show our file structure in production mode
  });
};

export { notFound, errorHandler };
