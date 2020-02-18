// @flow

import type { ErrorType } from './types';

/**
 * Utility for handling of Errors
 * @param {string} statusCode - HTTP Status Code
 * @param {string} statusText - Error Text
 * @param {string} message - Error Message
 * @returns {ErrorType} Error
 */
export const throwError = (
  statusCode: number,
  statusText: string,
  message: string,
): ErrorType => {
  const error: Object = new Error(message);
  error.name = statusText;
  error.status = statusCode;

  return error;
};
