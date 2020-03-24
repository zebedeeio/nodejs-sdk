# ZEBEDEE NodeJS SDK

[![npm version](https://badge.fury.io/js/zebedee-nodejs.svg)](https://badge.fury.io/js/zebedee-nodejs)

ZEBEDEE NodeJS SDK to integrate Bitcoin Lightning microtransactions into your game server or application server with ease. 

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
const apiOptions = { apiKey: 'XXXXXX' };

// Instantiate the API
initAPI(apiOptions);
```

## Creating Charge

```js
// Import the `createCharge` method
import { createCharge } from 'zebedee-nodejs';

// Set the payload
const payload = {
  expiresIn: 300,
  amount: "50000",
  description: 'My Custom Charde Description',
  callbackUrl: 'https://yourapp.com/callback',
  internalId: '11af01d092444a317cb33faa6b8304b8',
};

// Create Charge
try {
  const response = await createCharge(payload);

  // Response Example
  //
  // {
  //   "id": "c8be70f8-6722-4bac-bfaa-504a24ac7082",
  //   "name": "My Custom Charge Name",
  //   "unit": "msats",
  //   "amount": "10000",
  //   "createdAt": "2020-02-19T01:45:49.110Z",
  //   "internalId": "11af01d092444a317cb33faa6b8304b8",
  //   "callbackUrl": "http://your-website.com/callback",
  //   "description": "My Custom Charge Description",
  //   "status": "pending",
  //   "invoice": {
  //       "request": "lnbc100n1p0yey6dpp5fnutjajv9jjv78vpad370rrqzxufqxk3fk2r3m6mk5fxpapq0v8qdpdf4ujqsm4wd6x7mfqgd5xzun8v5sygetnvdexjur5d9hkucqzpgxqzfvsp5rr6v38qxwqu0tnsh5aaqg6kf5k4w8k68n5cpxklr8trdawpytfcs9qy9qsqkxpafcvqgkjvtka0jplgfzumgl7csc7q455au09ucm3q948dey5nvysnpj3vqnvnnqvpz0l2jehlxpzq9d0mqd2vr7x60xd7dpmddkspke8a9c",
  //       "expiresAt": "2020-02-19T01:50:49.059Z"
  //   }
  // }

} catch(error) {
  console.log({ error });
}
```

## Get Charge Details

```js
// Import the `getCharge` method
import { getChargeDetails } from 'zebedee-nodejs';

// Get Charge ID
const chargeId = 'c8be70f8-6722-4bac-bfaa-504a24ac7082';

// Get Charge Details
try {
  const response = await getChargeDetails(chargeId);

  // Response Example
  //
  // {
  //   "id": "c8be70f8-6722-4bac-bfaa-504a24ac7082",
  //   "name": "My Custom Charge Name",
  //   "unit": "msats",
  //   "amount": "10000",
  //   "createdAt": "2020-02-19T01:45:49.110Z",
  //   "internalId": "11af01d092444a317cb33faa6b8304b8",
  //   "callbackUrl": "http://your-website.com/callback",
  //   "description": "My Custom Charge Description",
  //   "status": "pending",
  //   "invoice": {
  //       "request": "lnbc100n1p0yey6dpp5fnutjajv9jjv78vpad370rrqzxufqxk3fk2r3m6mk5fxpapq0v8qdpdf4ujqsm4wd6x7mfqgd5xzun8v5sygetnvdexjur5d9hkucqzpgxqzfvsp5rr6v38qxwqu0tnsh5aaqg6kf5k4w8k68n5cpxklr8trdawpytfcs9qy9qsqkxpafcvqgkjvtka0jplgfzumgl7csc7q455au09ucm3q948dey5nvysnpj3vqnvnnqvpz0l2jehlxpzq9d0mqd2vr7x60xd7dpmddkspke8a9c",
  //       "expiresAt": "2020-02-19T01:50:49.059Z"
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
  expiresIn: 300,
  amount: "50000",
  internalId: '11af01d092444a317cb33faa6b8304b8',
  description: 'My Custom Withdrawal Description',
  callbackUrl: 'https://yourapp.com/callback',
};

// Create Withdrawal Request
try {
  const response = await createWithdrawalRequest(payload);

  // Example Response
  //
  // {
  //   "id": "547c8a36-44d8-40de-80a1-9ad745354a45",
  //   "unit": "msats",
  //   "amount": "50000",
  //   "createdAt": "2020-02-19T01:43:57.485Z",
  //   "internalId": "11af01d092444a317cb33faa6b8304b8",
  //   "description": "My Custom Withdrawal Description",
  //   "callbackUrl": "http://your-website.com/callback",
  //   "status": "pending",
  //   "invoice": {
  //       "request": "lnurl1dp68gurn8ghj7cn9w3sj6ctsdyh85etzv4jx2efwd9hj7a3s9acxz7tvdaskgtthd96xserjv9mkzmpdwfjhzat9wd6r7um9vdex2apav3skxdfev93rwvm9x43nwcf5vvekgdmpxq6rgvrrxumnxdp3vserqe35v4jr2efs8y6k2epkxf3rxc35vg6nwdrpx9jrqv3kxfjxxwqxmuhcd",
  //       "expiresAt": "2020-02-19T01:48:57.482Z"
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
  invoice: 'lnbc10.....',
  description: 'My New Description',
  internalId: '11af01d092444a317cb33faa6b8304b8',
};

// Pay Invoice
try {
  const response = await makePayment(payload);
  console.log({ response });

  // Example Response
  //
  // {
  //   "id": "2a0dc354-573f-4850-85f7-ab4a21e5143b",
  //   "fee": "1000",
  //   "unit": "msats",
  //   "amount": "45000",
  //   "invoice": "lnbc450n1p0yeytspp55yrs0j42wnkw0qutr8e0tgsf2yplxs9986t5gqmfpn7mfd0ckc8sdzq2pshjmt9de6zqen0wgsrgdfqwp5hsetvwvsxzapqwdshgmmndp5hxtnsd3skxefwxqzjccqp2sp5pyccqt6apxelz62d2ndrt0ssahndpcua4wklea80glaczx80t3wqrzjqfn4cln8jwe4dh4dmscddrmd6sdw6hzkn702l6ghwvr8lhad0ez5vzt8vyqqf2sqqqqqqqlgqqqqqqgq9q9qy9qsqqeft09gryr80aaghm7rmh7eeqfl7hxlcynp99730yk7qh534d9nyfwp0nc628rp8hpgp23fxzj5l2aet4y6sc4t79uj3wyjxffejmvgqrmxkvr",
  //   "internalId": "11af01d092444a317cb33faa6b8304b8",
  //   "processedAt": "2020-02-19T01:38:10.757Z",
  //   "description": "My Custom Payment Description",
  //   "status": "completed"
  // }
} catch(error) {
  console.log({ error });
}
```

## Webhooks

Use the `callbackUrl` properties in the `Charge` and `WithdrawalRequest` payloads to receive webhook calls. These webhooks are invoked when your Charge/WithdrawalRequest succeeds, fails, or when it eventually expires.

Webhooks give you more access to these entities' lifecycle.

## Contributions

ZEBEDEE is a big proponent of Open Source Software. We welcome PRs and contributions to the SDK and will try to review issues and PRs as soon as we can.




