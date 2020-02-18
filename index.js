// @flow


import axios from 'axios';

import { throwError } from './utils';
import type {
  ChargeInputType,
  PaymentInputType,
  WalletResponseType,
  ChargeResponseType,
  PaymentResponseType,
  APIConfigurationType,
  WithdrawalRequestInputType,
  WithdrawalRequestResponseType,
} from './types';

// Constants
const API_URL = 'https://beta-api.zebedee.io';

// Endpoints
const WALLET_ENDPOINT = '/v0/wallet';
const CHARGES_ENDPOINT = '/v0/charges';
const PAYMENTS_ENDPOINT = '/v0/payments';
const WITHDRAWAL_REQUESTS_ENDPOINT = '/v0/withdrawal-requests';

// Globals
let zAPI: Object = null;

/**
 * Instantiates an Axios API instance connected to the ZEBEDEE API
 * @param {APIConfigurationType} apiConfig API Configuration Options
 * @returns {any} Axios API Instance
 */
const initAPI = ({ apikey = '' }: APIConfigurationType) => {
  // API Base URL
  const baseURL = API_URL;

  // Default ZEBEDEE API Headers
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    apikey,
  };

  // Axios API Instance
  zAPI = axios.create({
    baseURL,
    headers: defaultHeaders,
    timeout: 10000,
  });
};

/**
 * Retrieves Wallet Details
 * @returns {(WalletResponseType|ErrorType)} Wallet Information or Error
 */
const getWalletDetails = async () => {
  try {
    const response = await zAPI.get(WALLET_ENDPOINT);
    const walletDetails: WalletResponseType = response.data.data;

    return walletDetails;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Creates a New Charge
 * @param {ChargeInputType} chargeParams Parameters for the Charge
 * @returns {(ChargeResponseType|ErrorType)} Charge Information or Error
 */
const createCharge = async (chargeParams: ChargeInputType) => {
  try {
    const response = await zAPI.post(CHARGES_ENDPOINT, chargeParams);
    const chargeDetails: ChargeResponseType = response.data.data;

    return chargeDetails;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves All Charges
 * @returns {(Array<ChargeResponseType>|ErrorType)} List of All Charges or Error
 */
const getAllCharges = async () => {
  try {
    const response = await zAPI.get(CHARGES_ENDPOINT);
    const allCharges: Array<ChargeResponseType> = response.data.data;

    return allCharges;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves Single Charge Details
 * @param {string} chargeId The Charge ID
 * @returns {(ChargeResponseType|ErrorType)} Charge Details or Error
 */
const getChargeDetails = async (chargeId: string) => {
  try {
    const response = await zAPI.get(`${CHARGES_ENDPOINT}/${chargeId}`);
    const chargeDetails: ChargeResponseType = response.data.data;

    return chargeDetails;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Creates a New Withdrawal Request
 * @param {WithdrawalRequestInputType} withdrawalRequestParams Parameters for the Withdrawal Request
 * @returns {(WithdrawalRequestResponseType|ErrorType)} Charge Information or Error
 */
const createWithdrawalRequest = async (withdrawalRequestParams: WithdrawalRequestInputType) => {
  try {
    const response = await zAPI.post(WITHDRAWAL_REQUESTS_ENDPOINT, withdrawalRequestParams);
    const withdrawalRequest: WithdrawalRequestResponseType = response.data.data;

    return withdrawalRequest;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves All WithdrawalRequests
 * @returns {(Array<WithdrawalRequestResponseType>|ErrorType)} List of All Withdrawal Requests or Error
 */
const getAllWithdrawalRequests = async () => {
  try {
    const response = await zAPI.get(WITHDRAWAL_REQUESTS_ENDPOINT);
    const allWithdrawalRequests: Array<WithdrawalRequestResponseType> = response.data.data;

    return allWithdrawalRequests;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves Single Withdrawal Request Details
 * @param {string} withdrawalRequestId The Withdrawal Request ID
 * @returns {(WithdrawalRequestResponseType|ErrorType)} Withdrawal Request Details or Error
 */
const getWithdrawalRequestDetails = async (withdrawalRequestId: string) => {
  try {
    const response = await zAPI.get(`${WITHDRAWAL_REQUESTS_ENDPOINT}/${withdrawalRequestId}`);
    const withdrawalRequestDetails: WithdrawalRequestResponseType = response.data.data;

    return withdrawalRequestDetails;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Makes Payment for BOLT11 Invoice
 * @param {PaymentInputType} payment - Payment object
 * @returns {(Object|ErrorType)} Payment Details or Error
 */
const makePayment = async (payment: PaymentInputType) => {
  try {
    const response = await zAPI.post(PAYMENTS_ENDPOINT, payment);
    const paymentDetails: PaymentResponseType = response.data.data;

    return paymentDetails;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves All Payments
 * @returns {(Array<PaymentResponseType>|ErrorType)} Payments List or Error
 */
const getAllPayments = async () => {
  try {
    const response = await zAPI.get(PAYMENTS_ENDPOINT);
    const allPayments: Array<PaymentResponseType> = response.data.data;

    return allPayments;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};

/**
 * Retrieves Single Payment Details
 * @param {string} paymentId The Payment ID
 * @returns {(PaymentResponseType|ErrorType)} Payment Details or Error
 */
const getPaymentDetails = async (paymentId: string) => {
  try {
    const response = await zAPI.get(`${PAYMENTS_ENDPOINT}/${paymentId}`);
    const paymentDetails: PaymentResponseType = response.data.data;

    return paymentDetails;
  } catch (error) {
    throw throwError(
      error.response.status,
      error.response.statusText,
      error.response.data.message,
    );
  }
};


export {
  // API Initi
  initAPI,
  // Wallet
  getWalletDetails,
  // Charges
  createCharge,
  getAllCharges,
  getChargeDetails,
  // Withdrawal Requests
  createWithdrawalRequest,
  getAllWithdrawalRequests,
  getWithdrawalRequestDetails,
  // Payments
  makePayment,
  getAllPayments,
  getPaymentDetails,
};