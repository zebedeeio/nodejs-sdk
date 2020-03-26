
// Types
export type APIConfigurationType = {
  apikey: string,
};

export type ErrorResponseType = {
  name: string,
  status: number,
  message: string,
};

export type ErrorInputType = {
  status: string,
  response: Object,
};

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

export type WithdrawalRequestInputType = {
  name: string,
  amount: string,
  internalId: string,
  callbackUrl: string,
  description: string,
}

export type WithdrawalRequestResponseType = {
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
}

export type PaymentInputType = {
  invoice: string,
  internalId: string,
  description: string,
}

export type PaymentResponseType = {
  id: string,
  fee: string,
  unit: string,
  status: string,
  amount: string,
  invoice: string,
  internalId: string,
  processedAt: string,
  description: string,
}

export type WalletResponseType = {
  balance: string,
  unit: string,
}