import type { ErrorResponseType, ErrorInputType } from './types';

/**
 * Utility for handling and formatting Errors
 * @param {ErrorInputType} error Error
 * @returns {ErrorResponseType} Formatted Error
 */
export const throwError = (error: ErrorInputType): ErrorResponseType => {
  const errorMessage = error.response.data.errorString;
  const errorName = error.response.data.message;
  const errorStatus = error.response.status;

  const errorObj: Object = new Error(errorMessage);

  errorObj.name = errorName;
  errorObj.status = errorStatus;
  errorObj.message = errorMessage;

  return errorObj;
};

/**
 * Utility for handling client errors
 * @param {message} message string
 * @returns {Object} Error
 */
export const throwClientErr = (message: string) => new Error(message);
