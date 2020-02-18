// @flow

// Types
export type ChargeInputType = {
  name: string,
  amount: string,
  internalId: string,
  callbackUrl: string,
  description: string,
};

export type ChargeResponseType = {
  id: string,
  name: string,
  unit: string,
  amount: string,
  status: string,
  createdAt: string,
  internalId: string,
  callbackUrl: string,
  description: string,
  invoice: {
    request: string,
    expiresAt: string,
  },
};

export type WithdrawalRequestType = {
  id: string,
  name: string,
  unit: string,
  amount: string,
  status: string,
  createdAt: string,
  internalId: string,
  callbackUrl: string,
  description: string,
  invoice: {
    request: string,
    expiresAt: string,
  },
};

export type PaymentType = {
  walletId: string,
  invoiceId: string,
  entityId: string,
  internalId: string,
};

export type APIConfigurationType = {
  apikey: string,
};

export type ErrorType = {
  name: string,
  error: Object,
  status: number,
};

export type PaymentInputType = {}

export type PaymentResponseType = {}

export type WalletResponseType = {}

export type WithdrawalRequestInputType = {}

export type WithdrawalRequestResponseType = {}
