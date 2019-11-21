
// Imports
import axios from 'axios';
import crypto from 'crypto';

// Constants
const VERSION = 'v0.1.2';
const API_URL = 'https://api.zebedee.io/api/v1';
const DEV_API_URL = 'https://dev-api.zebedee.io/api/v1';
const PROD_ENV = 'PRODUCTION';
// const DEV_ENV = 'DEVELOPMENT';

// Endpoints
const CHARGES_ENDPOINT = '/charges';
const PAYMENTS_ENDPOINT = '/payments';

// Types
type ChargeType = {
  name: string,
  description: string,
  amount: number,
  successUrl: string,
  callbackUrl: string,
  emailReceipt: string,
  entityId: string,
  internalId: string,
};

type PaymentType = {
  walletId: string,
  invoiceId: string,
  entityId: string,
  internalId: string,
};

type APIType = {
  apiKey: string,
  env: API_URL | DEV_API_URL,
};

type ErrorType = {
  name: string,
  error: Object,
  status: number,
};

// Globals
let api = null;
let key = null;

/**
 * Creates Error Utility
 *
 * @param {string} statusCode - HTTP Status Code
 * @param {string} statusText - Error Text
 * @param {string} message - Error Message
 * @returns {ErrorType} Error
 *
 */
const newError = (
  statusCode: number,
  statusText: string,
  message: string,
): ErrorType => {
  const error = new Error(message);
  error.name = statusText;
  error.status = statusCode;

  return error;
};

/**
 * Initialize ZEBEDEE API with Credentials
 *
 * @param {APIType} apiOptions - Options to initialize the API
 *
 */
const initAPI = ({
  apiKey = '',
  env = PROD_ENV,
}: APIType) => {
  // Setting Globals
  key = apiKey;

  // API Base URL
  const baseURL = (env === PROD_ENV) ? API_URL : DEV_API_URL;

  // Default API Headers
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: apiKey,
    user_agent: VERSION,
    Host: [baseURL],
  };

  // API Instance
  api = axios.create({
    baseURL,
    headers: defaultHeaders,
    timeout: 10000,
  });
};

/**
 * Create New Charge
 *
 * @param {ChargeType} charge - Charge object
 * @returns {(Object|ErrorType)} Charge Details or Error
 *
 */
const createCharge = async (charge: ChargeType) => {
  try {
    const response = await api.post(CHARGES_ENDPOINT, charge);
    return response.data.data;
  } catch (error) {
    throw newError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves Charge Details
 *
 * @param {string} chargeId - the ID of the Charge
 * @returns {(Object|ErrorType)} Charge Details or Error
 *
 */
const getChargeDetails = async (chargeId: string) => {
  try {
    const response = await api.get(`${CHARGES_ENDPOINT}/${chargeId}`);
    return response.data.data;
  } catch (error) {
    throw newError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves Charges
 *
 * @returns {(Object|ErrorType)} Charges List or Error
 *
 */
const getChargeList = async () => {
  try {
    const response = await api.get(CHARGES_ENDPOINT);
    return response.data.data;
  } catch (error) {
    throw newError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Make Payment
 *
 * @param {PaymentType} payment - Payment object
 * @returns {(Object|ErrorType)} Payment Details or Error
 *
 */
const makePayment = async (payment: PaymentType) => {
  try {
    const response = await api.post(PAYMENTS_ENDPOINT, payment);
    return response.data.data;
  } catch (error) {
    throw newError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves Payment Details
 *
 * @param {string} paymentId - the ID of the Payment
 * @returns {(Object|ErrorType)} Payment Details or Error
 *
 */
const getPaymentDetails = async (paymentId: string) => {
  try {
    const response = await api.get(`${PAYMENTS_ENDPOINT}/${paymentId}`);
    return response.data.data;
  } catch (error) {
    throw newError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves Payments
 *
 * @returns {(Object|ErrorType)} Payments List or Error
 *
 */
const getPaymentsList = async () => {
  try {
    const response = await api.get(PAYMENTS_ENDPOINT);
    return response.data.data;
  } catch (error) {
    throw newError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Validates ZEBEDEE Signature
 *
 * @return {Object} A good string
 *
 */
const validateCharge = async (charge: ChargeType) => {
  const hash = crypto
    .createHmac('sha256', key)
    .update(charge.id)
    .digest('hex');

  return hash === charge.hashed_order;
};

export {
  initAPI,
  createCharge,
  getChargeDetails,
  getChargeList,
  makePayment,
  getPaymentDetails,
  getPaymentsList,
  validateCharge,
};
