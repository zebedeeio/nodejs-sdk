# ZEBEDEE NodeJS SDK

NodeJS SDK to integrate ZEBEDEE into your game or application with ease.

## Documentation

For detailed information about the endpoints available in the ZEBEDEE platform please refer to our [Documentation Website](https://google.com).

## Installation

`zebedee-node` is a JavaScript library that facilitates the interaction with the ZEBEDEE API in NodeJS projects.

To install it run:

```
npm install zebedee-node --save
```
or
```
yarn add zebedee-node
```

## API Initialization

```js
// Import the `initAPI` method
import { initAPI } from 'zebedee-node';

// Configure the API
const apiOptions = {
  env: 'PRODUCTION',
  apiKey: 'XXXXXX',
};

// Instantiate the API
initAPI(apiOptions);
```

## Creating Charge

```js
// Import the `createCharge` method
import { createCharge } from 'zebedee-node';

// Set the payload
const payload = {
  name: 'Optional Name',
  description: 'This is a test Bitcoin charge',
  amount: 1000,
  successUrl: 'https://yourapp.com/zebedee/success',
  callbackUrl: 'https://yourapp.com/zebedee/callback',
  emailReceipt: 'youremail@testing.com',
  entityId: '2ths6afghj17sh',
  internalId: 'YOUR INTERNAL SYSTEM\'S ID',
};

// Create Charge
try {
  const response = await createCharge(payload);
  console.log({ response });
} catch(error) {
  console.log({ error });
}
```

## Making Payment

```js
// Import the `makePayment` method
import { makePayment } from 'zebedee-node';

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

Use the `successUrl` and `callbackUrl` properties in the Charge payload to receive webhook calls. These webhooks are invoked when your Charge succeeds, fails, or when it eventually expires.

Webhooks give you more access to the Charge lifecycle.

## Examples

For more detailed examples please refer to our [Examples](https://google.com) folder.


## Contributions

ZEBEDEE is a big proponent of Open Source Software. We welcome PRs and contributions to the SDK and will try to review issues and PRs as soon as we can.




