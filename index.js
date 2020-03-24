// @flow
import axios from 'axios';
import { throwError, throwClientErr } from './utils/error';
import {
  API_URL,
  WALLET_ENDPOINT,
  CHARGES_ENDPOINT,
  PAYMENTS_ENDPOINT,
  WITHDRAWAL_REQUESTS_ENDPOINT,
} from './constants/endpoints';

import type {
  APIConfigurationType,
  ErrorResponseType,
  ErrorInputType,
  ChargeInputType,
  ChargeResponseType,
  WithdrawalRequestInputType,
  WithdrawalRequestResponseType,
  PaymentInputType,
  PaymentResponseType,
  WalletResponseType,
} from './types';

// Globals
let zAPI: Object = null;

/**
 * Instantiates an Axios API instance connected to the ZEBEDEE API
 * @param {APIConfigurationType} apiConfig API Configuration Options
 * @returns {any} Axios API Instance
 */
export const initAPI = ({ apikey }: APIConfigurationType) => {
  if(!apikey) {
    throw throwClientErr('Missing required param: apiKey');
  }

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
 * @returns {(Object|ErrorResponseType)} Wallet Information or Error
 */
export const getWalletDetails = async () => {
  try {
    const response = await zAPI.get(WALLET_ENDPOINT);
    const walletDetails: WalletResponseType = response.data.data;

    return walletDetails;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Creates a New Charge
 * @param {ChargeInputType} chargeParams Parameters for the Charge
 * @returns {(Object|ErrorResponseType)} Charge Information or Error
 */
export const createCharge = async (chargeParams: ChargeInputType) => {
  try {
    const response = await zAPI.post(CHARGES_ENDPOINT, chargeParams);
    const chargeDetails: ChargeResponseType = response.data.data;

    return chargeDetails;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Retrieves All Charges
 * @returns {(Object|ErrorResponseType)} List of All Charges or Error
 */
export const getAllCharges = async () => {
  try {
    const response = await zAPI.get(CHARGES_ENDPOINT);
    const allCharges: Array<ChargeResponseType> = response.data.data;

    return allCharges;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Retrieves Single Charge Details
 * @param {string} chargeId The Charge ID
 * @returns {(Object|ErrorResponseType)} Charge Details or Error
 */
export const getChargeDetails = async (chargeId: string) => {
  try {
    const response = await zAPI.get(`${CHARGES_ENDPOINT}/${chargeId}`);
    const chargeDetails: ChargeResponseType = response.data.data;

    return chargeDetails;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Creates a New Withdrawal Request
 * @param {WithdrawalRequestInputType} withdrawalRequestParams Parameters for the Withdrawal Request
 * @returns {(Object|ErrorResponseType)} Charge Information or Error
 */
export const createWithdrawalRequest = async (withdrawalRequestParams: WithdrawalRequestInputType) => {
  try {
    const response = await zAPI.post(WITHDRAWAL_REQUESTS_ENDPOINT, withdrawalRequestParams);
    const withdrawalRequest: WithdrawalRequestResponseType = response.data.data;

    return withdrawalRequest;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Retrieves All WithdrawalRequests
 * @returns {(Object|ErrorResponseType)} List of All Withdrawal Requests or Error
 */
export const getAllWithdrawalRequests = async () => {
  try {
    const response = await zAPI.get(WITHDRAWAL_REQUESTS_ENDPOINT);
    const allWithdrawalRequests: Array<WithdrawalRequestResponseType> = response.data.data;

    return allWithdrawalRequests;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Retrieves Single Withdrawal Request Details
 * @param {string} withdrawalRequestId The Withdrawal Request ID
 * @returns {(Object|ErrorResponseType)} Withdrawal Request Details or Error
 */
export const getWithdrawalRequestDetails = async (withdrawalRequestId: string) => {
  try {
    const response = await zAPI.get(`${WITHDRAWAL_REQUESTS_ENDPOINT}/${withdrawalRequestId}`);
    const withdrawalRequestDetails: WithdrawalRequestResponseType = response.data.data;

    return withdrawalRequestDetails;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Makes Payment for BOLT11 Invoice
 * @param {PaymentInputType} payment - Payment object
 * @returns {(Object|ErrorResponseType)} Payment Details or Error
 */
export const makePayment = async (payment: PaymentInputType) => {
  try {
    const response = await zAPI.post(PAYMENTS_ENDPOINT, payment);
    const paymentDetails: PaymentResponseType = response.data.data;

    return paymentDetails;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Retrieves All Payments
 * @returns {(Object|ErrorResponseType)} Payments List or Error
 */
export const getAllPayments = async () => {
  try {
    const response = await zAPI.get(PAYMENTS_ENDPOINT);
    const allPayments: Array<PaymentResponseType> = response.data.data;

    return allPayments;
  } catch (error) {
    throw throwError(error);
  }
};

/**
 * Retrieves Single Payment Details
 * @param {string} paymentId The Payment ID
 * @returns {(Object|ErrorResponseType)} Payment Details or Error
 */
export const getPaymentDetails = async (paymentId: string) => {
  try {
    const response = await zAPI.get(`${PAYMENTS_ENDPOINT}/${paymentId}`);
    const paymentDetails: PaymentResponseType = response.data.data;

    return paymentDetails;
  } catch (error) {
    throw throwError(error);
  }
};
