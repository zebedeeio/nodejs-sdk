// Imports
import axios from 'axios';
import crypto from 'crypto';

// Constants
const VERSION = 'v0.1.0';
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

// Globals
let api = null;
let key = null;

const newError = (statusCode, statusText, message) => {
  const error = new Error(message);
  error.name = statusText;
  error.status = statusCode;

  return error;
};

const initAPI = ({
  apiKey = '',
  environment = PROD_ENV,
}) => {
  // Setting Globals
  key = apiKey;

  // Default API Headers
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: apiKey,
    user_agent: VERSION,
  };

  // API Base URL
  const baseURL = (environment === PROD_ENV) ? API_URL : DEV_API_URL;

  // API Instance
  api = axios.create({
    baseURL,
    headers: defaultHeaders,
    timeout: 10000,
  });
};

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

const checkSignature = async (charge: ChargeType) => {
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
  checkSignature,
};
