"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.getPaymentDetails = exports.getAllPayments = exports.makePayment = exports.getWithdrawalRequestDetails = exports.getAllWithdrawalRequests = exports.createWithdrawalRequest = exports.getChargeDetails = exports.getAllCharges = exports.createCharge = exports.getWalletDetails = exports.initAPI = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _axios = _interopRequireDefault(require("axios"));

// Constants
var API_URL = 'https://beta-api.zebedee.io';

// Endpoints
var WALLET_ENDPOINT = '/v0/wallet';
var CHARGES_ENDPOINT = '/v0/charges';
var PAYMENTS_ENDPOINT = '/v0/payments';
var WITHDRAWAL_REQUESTS_ENDPOINT = '/v0/withdrawal-requests';

// Types



































































// Globals
var zAPI = null;

/**
                  * Utility for handling of Errors
                  * @param {string} statusCode - HTTP Status Code
                  * @param {string} statusText - Error Text
                  * @param {string} message - Error Message
                  * @returns {ErrorType} Error
                  */
var throwError = function throwError(
statusCode,
statusText,
message)
{
  var error = new Error(message);
  error.name = statusText;
  error.status = statusCode;

  return error;
};

/**
    * Instantiates an Axios API instance connected to the ZEBEDEE API
    * @param {APIConfigurationType} apiConfig API Configuration Options
    * @returns {any} Axios API Instance
    */
var initAPI = function initAPI(_ref) {var _ref$apikey = _ref.apikey,apikey = _ref$apikey === void 0 ? '' : _ref$apikey;
  // API Base URL
  var baseURL = API_URL;

  // Default ZEBEDEE API Headers
  var defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    apikey: apikey };


  // Axios API Instance
  zAPI = _axios["default"].create({
    baseURL: baseURL,
    headers: defaultHeaders,
    timeout: 10000 });

};

/**
    * Retrieves Wallet Details
    * @returns {(WalletResponseType|ErrorType)} Wallet Information or Error
    */exports.initAPI = initAPI;
var getWalletDetails = function getWalletDetails() {var response, walletDetails;return _regenerator["default"].async(function getWalletDetails$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return _regenerator["default"].awrap(

          zAPI.get(WALLET_ENDPOINT));case 3:response = _context.sent;
          walletDetails = response.data.data;return _context.abrupt("return",

          walletDetails);case 8:_context.prev = 8;_context.t0 = _context["catch"](0);throw (

            throwError(
            _context.t0.response.status,
            _context.t0.response.statusText,
            _context.t0.response.data.message));case 11:case "end":return _context.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                         * Creates a New Charge
                                                                                                                         * @param {ChargeInputType} chargeParams Parameters for the Charge
                                                                                                                         * @returns {(ChargeResponseType|ErrorType)} Charge Information or Error
                                                                                                                         */exports.getWalletDetails = getWalletDetails;
var createCharge = function createCharge(chargeParams) {var response, chargeDetails;return _regenerator["default"].async(function createCharge$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;_context2.next = 3;return _regenerator["default"].awrap(

          zAPI.post(CHARGES_ENDPOINT, chargeParams));case 3:response = _context2.sent;
          chargeDetails = response.data.data;return _context2.abrupt("return",

          chargeDetails);case 8:_context2.prev = 8;_context2.t0 = _context2["catch"](0);throw (

            throwError(
            _context2.t0.response.status,
            _context2.t0.response.statusText,
            _context2.t0.response.data.message));case 11:case "end":return _context2.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                           * Retrieves All Charges
                                                                                                                           * @returns {(Array<ChargeResponseType>|ErrorType)} List of All Charges or Error
                                                                                                                           */exports.createCharge = createCharge;
var getAllCharges = function getAllCharges() {var response, allCharges;return _regenerator["default"].async(function getAllCharges$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;_context3.next = 3;return _regenerator["default"].awrap(

          zAPI.get(CHARGES_ENDPOINT));case 3:response = _context3.sent;
          allCharges = response.data.data;return _context3.abrupt("return",

          allCharges);case 8:_context3.prev = 8;_context3.t0 = _context3["catch"](0);throw (

            throwError(
            _context3.t0.response.status,
            _context3.t0.response.statusText,
            _context3.t0.response.data.message));case 11:case "end":return _context3.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                           * Retrieves Single Charge Details
                                                                                                                           * @param {string} chargeId The Charge ID
                                                                                                                           * @returns {(ChargeResponseType|ErrorType)} Charge Details or Error
                                                                                                                           */exports.getAllCharges = getAllCharges;
var getChargeDetails = function getChargeDetails(chargeId) {var response, chargeDetails;return _regenerator["default"].async(function getChargeDetails$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.prev = 0;_context4.next = 3;return _regenerator["default"].awrap(

          zAPI.get("".concat(CHARGES_ENDPOINT, "/").concat(chargeId)));case 3:response = _context4.sent;
          chargeDetails = response.data.data;return _context4.abrupt("return",

          chargeDetails);case 8:_context4.prev = 8;_context4.t0 = _context4["catch"](0);throw (

            throwError(
            _context4.t0.response.status,
            _context4.t0.response.statusText,
            _context4.t0.response.data.message));case 11:case "end":return _context4.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                           * Creates a New Withdrawal Request
                                                                                                                           * @param {WithdrawalRequestInputType} withdrawalRequestParams Parameters for the Withdrawal Request
                                                                                                                           * @returns {(WithdrawalRequestResponseType|ErrorType)} Charge Information or Error
                                                                                                                           */exports.getChargeDetails = getChargeDetails;
var createWithdrawalRequest = function createWithdrawalRequest(withdrawalRequestParams) {var response, withdrawalRequest;return _regenerator["default"].async(function createWithdrawalRequest$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.prev = 0;_context5.next = 3;return _regenerator["default"].awrap(

          zAPI.post(WITHDRAWAL_REQUESTS_ENDPOINT, withdrawalRequestParams));case 3:response = _context5.sent;
          withdrawalRequest = response.data.data;return _context5.abrupt("return",

          withdrawalRequest);case 8:_context5.prev = 8;_context5.t0 = _context5["catch"](0);throw (

            throwError(
            _context5.t0.response.status,
            _context5.t0.response.statusText,
            _context5.t0.response.data.message));case 11:case "end":return _context5.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                           * Retrieves All WithdrawalRequests
                                                                                                                           * @returns {(Array<WithdrawalRequestResponseType>|ErrorType)} List of All Withdrawal Requests or Error
                                                                                                                           */exports.createWithdrawalRequest = createWithdrawalRequest;
var getAllWithdrawalRequests = function getAllWithdrawalRequests() {var response, allWithdrawalRequests;return _regenerator["default"].async(function getAllWithdrawalRequests$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.prev = 0;_context6.next = 3;return _regenerator["default"].awrap(

          zAPI.get(WITHDRAWAL_REQUESTS_ENDPOINT));case 3:response = _context6.sent;
          allWithdrawalRequests = response.data.data;return _context6.abrupt("return",

          allWithdrawalRequests);case 8:_context6.prev = 8;_context6.t0 = _context6["catch"](0);throw (

            throwError(
            _context6.t0.response.status,
            _context6.t0.response.statusText,
            _context6.t0.response.data.message));case 11:case "end":return _context6.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                           * Retrieves Single Withdrawal Request Details
                                                                                                                           * @param {string} withdrawalRequestId The Withdrawal Request ID
                                                                                                                           * @returns {(WithdrawalRequestResponseType|ErrorType)} Withdrawal Request Details or Error
                                                                                                                           */exports.getAllWithdrawalRequests = getAllWithdrawalRequests;
var getWithdrawalRequestDetails = function getWithdrawalRequestDetails(withdrawalRequestId) {var response, withdrawalRequestDetails;return _regenerator["default"].async(function getWithdrawalRequestDetails$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.prev = 0;_context7.next = 3;return _regenerator["default"].awrap(

          zAPI.get("".concat(WITHDRAWAL_REQUESTS_ENDPOINT, "/").concat(withdrawalRequestId)));case 3:response = _context7.sent;
          withdrawalRequestDetails = response.data.data;return _context7.abrupt("return",

          withdrawalRequestDetails);case 8:_context7.prev = 8;_context7.t0 = _context7["catch"](0);throw (

            throwError(
            _context7.t0.response.status,
            _context7.t0.response.statusText,
            _context7.t0.response.data.message));case 11:case "end":return _context7.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                           * Makes Payment for BOLT11 Invoice
                                                                                                                           * @param {PaymentInputType} payment - Payment object
                                                                                                                           * @returns {(Object|ErrorType)} Payment Details or Error
                                                                                                                           */exports.getWithdrawalRequestDetails = getWithdrawalRequestDetails;
var makePayment = function makePayment(payment) {var response, paymentDetails;return _regenerator["default"].async(function makePayment$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.prev = 0;_context8.next = 3;return _regenerator["default"].awrap(

          zAPI.post(PAYMENTS_ENDPOINT, payment));case 3:response = _context8.sent;
          paymentDetails = response.data.data;return _context8.abrupt("return",

          paymentDetails);case 8:_context8.prev = 8;_context8.t0 = _context8["catch"](0);throw (

            throwError(
            _context8.t0.response.status,
            _context8.t0.response.statusText,
            _context8.t0.response.data.message));case 11:case "end":return _context8.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                           * Retrieves All Payments
                                                                                                                           * @returns {(Array<PaymentResponseType>|ErrorType)} Payments List or Error
                                                                                                                           */exports.makePayment = makePayment;
var getAllPayments = function getAllPayments() {var response, allPayments;return _regenerator["default"].async(function getAllPayments$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.prev = 0;_context9.next = 3;return _regenerator["default"].awrap(

          zAPI.get(PAYMENTS_ENDPOINT));case 3:response = _context9.sent;
          allPayments = response.data.data;return _context9.abrupt("return",

          allPayments);case 8:_context9.prev = 8;_context9.t0 = _context9["catch"](0);throw (

            throwError(
            _context9.t0.response.status,
            _context9.t0.response.statusText,
            _context9.t0.response.data.message));case 11:case "end":return _context9.stop();}}}, null, null, [[0, 8]]);};




/**
                                                                                                                           * Retrieves Single Payment Details
                                                                                                                           * @param {string} paymentId The Payment ID
                                                                                                                           * @returns {(PaymentResponseType|ErrorType)} Payment Details or Error
                                                                                                                           */exports.getAllPayments = getAllPayments;
var getPaymentDetails = function getPaymentDetails(paymentId) {var response, paymentDetails;return _regenerator["default"].async(function getPaymentDetails$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.prev = 0;_context10.next = 3;return _regenerator["default"].awrap(

          zAPI.get("".concat(PAYMENTS_ENDPOINT, "/").concat(paymentId)));case 3:response = _context10.sent;
          paymentDetails = response.data.data;return _context10.abrupt("return",

          paymentDetails);case 8:_context10.prev = 8;_context10.t0 = _context10["catch"](0);throw (

            throwError(
            _context10.t0.response.status,
            _context10.t0.response.statusText,
            _context10.t0.response.data.message));case 11:case "end":return _context10.stop();}}}, null, null, [[0, 8]]);};exports.getPaymentDetails = getPaymentDetails;
