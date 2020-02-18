# ZEBEDEE NodeJS SDK

[![npm version](https://badge.fury.io/js/zebedee-nodejs.svg)](https://badge.fury.io/js/zebedee-nodejs)

NodeJS SDK to integrate ZEBEDEE Lightning microtransactions into your game or application with ease.

## Documentation

For detailed information about the endpoints available in the ZEBEDEE platform please refer to our [Documentation Website](https://beta-docs.zebedee.io).

## Installation

`zebedee-nodejs` is a JavaScript library that facilitates the interaction with the ZEBEDEE API in NodeJS projects.

To install it run:

```
npm install zebedee-nodejs --save
```
or
```
yarn add zebedee-nodejs
```

## API Initialization

```js
// Import the `initAPI` method
import { initAPI } from 'zebedee-node';

// Configure the API (API Keys available at the ZEBEDEE Developers Dashboard)
const apiOptions = {
  apiKey: 'XXXXXX',
};

// Instantiate the API
initAPI(apiOptions);
```

## Creating Charge

```js
// Import the `createCharge` method
import { createCharge } from 'zebedee-nodejs';

// Set the payload
const payload = {
  name: 'Optional Name',
  description: 'This is a Lightning charge',
  amount: 5000,
  callbackUrl: 'https://yourapp.com/zebedee-charge/callback',
  internalId: 'YOUR INTERNAL SYSTEM\'S ID',
};

// Create Charge
try {
  const response = await createCharge(payload);

  // Response Example
  // {
  //   "message": "Successfully created Charge.",
  //   "data": {
  //     "id": "e4e2afc8-f469-4d4d-aeba-8c25957134ad",
  //     "name": "Optional Name",
  //     "description": "This is a Lightning charge",
  //     "createdAt": "2020-01-06T15:21:30.437Z",
  //     "callbackUrl": "https://yourapp.com/zebedee-charge/callback",
  //     "internalId": "YOUR INTERNAL SYSTEM\'S ID",
  //     "amount": "5000",
  //     "status": "pending",
  //     "invoice": {
  //       "expiresAt": "2020-01-06T15:31:30.442Z",
  //       "request": "lnbc50n1p0px5r6pp5f2zlacfd974742r5w6tnp66jch6u38nz03gy82xuzrczuc4cywqsdq4f4ujqnn9wusyx6rpwfnk2cqzpgxqzjc9qy9qsqsp57xlerer20wufen50grclt3np5rm640yfve72mvaqu096pthtt8vqjj0pvpfxft4nmqxx3w6klsw80f625qfdkveedehur8wumgkzq9lsz6z5tk9afsnnuzusd2qtrczkuyu9sn8c30f3ldg584y6a2mhvfgqc3m8rm"
  //     }
  //   }
  // }

} catch(error) {
  console.log({ error });
}
```

## Get Charge Details

```js
// Import the `getCharge` method
import { getCharge } from 'zebedee-nodejs';

// Get Charge ID
const chargeId = 'e4e2afc8-f469-4d4d-aeba-8c25957134ad';

// Get Charge Details
try {
  const response = await getCharge(chargeId);

  // Response Example
  // {
  //   "message": "Successfully retrieved Charge.",
  //   "data": {
  //     "id": "e4e2afc8-f469-4d4d-aeba-8c25957134ad",
  //     "name": "My New Charge",
  //     "description": "My New Charge",
  //     "createdAt": "2020-01-06T15:21:30.437Z",
  //     "callbackUrl": "http://localhost/callback",
  //     "internalId": "3451818",
  //     "amount": "5000",
  //     "status": "completed",
  //     "invoice": {
  //       "expiresAt": "2020-01-06T15:31:30.442Z",
  //       "request": "lnbc50n1p0px5r6pp5f2zlacfd974742r5w6tnp66jch6u38nz03gy82xuzrczuc4cywqsdq4f4ujqnn9wusyx6rpwfnk2cqzpgxqzjc9qy9qsqsp57xlerer20wufen50grclt3np5rm640yfve72mvaqu096pthtt8vqjj0pvpfxft4nmqxx3w6klsw80f625qfdkveedehur8wumgkzq9lsz6z5tk9afsnnuzusd2qtrczkuyu9sn8c30f3ldg584y6a2mhvfgqc3m8rm"
  //     }
  //   }
  // }

} catch(error) {
  console.log({ error });
}
```

## Creating Withdrawal Request

```js
// Import the `createWithdrawalRequest` method
import { createWithdrawalRequest } from 'zebedee-nodejs';

// Set the payload
const payload = {
  amount: 5000,
  name: 'Optional Name',
  internalId: 'YOUR INTERNAL SYSTEM\'S ID',
  description: 'This is a Lightning charge',
  callbackUrl: 'https://yourapp.com/zebedee-charge/callback',
};

// Create Withdrawal Request
try {
  const response = await createWithdrawalRequest(payload);

  // Example Response
  // {
  //   "message": "Successfully created Withdrawal Request.",
  //   "data": {
  //     "id": "bedc9ac7-fd19-4b3d-bad5-66aa83120db6",
  //     "fee": null,
  //     "lnurl": "lnurl1dp68gup69uhkkmmwvukhzcfw0fjkyetyv4jjucmvda6kgw3cxqcrqtmkxqhhw6t5dpj8ycthv9kz6un9w96k2um5wvkhqcted3hkzeplwdjkxun9ws7nxdpj89jrsdtxxgckxvp3xq6nvctyxpjkzwphxuexzcm9xejnjvekxumxvwpcxg6rxvfcxf3nywfh8ymnxvrrx43ngwfkvgurqdtpxshffa9l",
  //     "amount": "10000",
  //     "status": "pending",
  //     "internalId": "1234567890",
  //     "description": "My Description"
  //   }
  // }
} catch(error) {
  console.log({ error });
}
```

## Making Payment

```js
// Import the `makePayment` method
import { makePayment } from 'zebedee-nodejs';

// Set the payload
const payload = {
  invoice: 'lnbc1.....',
  internalId: 'YOUR INTERNAL SYSTEM\'S ID',
};

// Pay Invoice
try {
  const response = await makePayment(payload);
  console.log({ response });
} catch(error) {
  console.log({ error });
}
```

## Webhooks

Use the `callbackUrl` properties in the Charge and WithdrawalRequest payloads to receive webhook calls. These webhooks are invoked when your Charge/WithdrawalRequest succeeds, fails, or when it eventually expires.

Webhooks give you more access to these entities' lifecycle.

## Examples

For more detailed examples please refer to our [Examples](https://google.com) folder.

## Contributions

ZEBEDEE is a big proponent of Open Source Software. We welcome PRs and contributions to the SDK and will try to review issues and PRs as soon as we can.




