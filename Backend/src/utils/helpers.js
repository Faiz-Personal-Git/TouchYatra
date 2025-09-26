import { config } from "./index.js";

export const mongoUri = (userName, Password, dbName, clusterName, clusterNameSuffix) => {

  if(!config.isProduction)
    return `mongodb://localhost:27017/${dbName}`;

  const encUserName = encodeURIComponent(userName);
  const encPassword = encodeURIComponent(Password);

  return `mongodb+srv://${encUserName}:${encPassword}@${clusterName}.${clusterNameSuffix}.mongodb.net/${dbName}`;
}

export class ApiResponse { 
  constructor(statusCode, data = null, message = null, errors = null, success) {
    this.IsSuccess = success || (statusCode >= 200 && statusCode < 300);
    this.statusCode = statusCode;
    this.Message = message ?? ((success || (statusCode >= 200 && statusCode < 300))? "Operation Successful" : "Operation Failed");
    this.Data = data;
    this.Errors = errors;
  }
}

export class ApiError extends Error {
  constructor(
    statusCode,
    message,
    errors = [],
    stack = ""
    // isOperational = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    const response = await requestHandler(req, res, next);
    if (response && response instanceof ApiResponse) {
      const { statusCode, ...rest } = response;
      res.status(statusCode || 200).json(rest);
    }
  } catch (error) {
    next(error);
  }
};