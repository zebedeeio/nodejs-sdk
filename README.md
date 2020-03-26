# ZEBEDEE NodeJS SDK

[![npm version](https://badge.fury.io/js/zebedee-nodejs.svg)](https://badge.fury.io/js/zebedee-nodejs)

ZEBEDEE NodeJS SDK to integrate Bitcoin Lightning microtransactions into your game server or application server with ease.

## Documentation

For detailed information about the endpoints available in the ZEBEDEE platform please refer to our [Documentation Website](https://documentation.zebedee.io) or the [RESTful API Reference Website](https://beta-docs.zebedee.io).

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

That is all! You are now ready to hit the ground running adding Bitcoin Lightning microtransactions in your game or application server. Follow the examples below to get started. You will find detailed snippets of the many methods available to you through the NodeJS SDK.

## API Initialization

```js
// Import the `initAPI` method
import { initAPI } from 'zebedee-node';

// Configure the API (API Keys available at the ZEBEDEE Developers Dashboard)
const apiOptions = { apiKey: 'XXXXXX' };

// Instantiate the API
initAPI(apiOptions);
```

### Initialize API Params

|Parameter|Type|Required|Default|Description
|-|-|-|-|-
|apiKey|*string*|Yes||The key provided to you to instantiate the api

----

## Get Wallet Details

Retrieves wallet information including total balance.

```js
// Import the `getWalletDetails` method
import { getWalletDetails } from 'zebedee-nodejs';

// Get Wallet Details
try {
  const response = await getWalletDetails();

  // Response Example
  // {
  //   "unit": "msats",
  //   "balance": "1000000"
  // }
} catch(error) {
  console.log({ error });
}
```
----

## Get All Charges

Retrieves all Charges created by this Key.

```js
// Import the `getAllCharges` method
import { getAllCharges } from 'zebedee-nodejs';

// Get All Charges
try {
  const response = await getAllCharges();

  // Response Example
  // [
  //     {
  //         "id": "c121356b-9671-4fbd-a751-987fb4b3d0b3",
  //         "description": "Description of the Charge",
  //         "createdAt": "2019-12-23T03:58:17.993Z",
  //         "callbackUrl": "http://localhost/callback",
  //         "internalId": "3451818",
  //         "amount": "2000",
  //         "status": "pending",
  //         "invoice": {
  //             "expiresAt": "2019-12-23T04:08:18.038Z",
  //             "request": "lnbc20n1p0qqw66pp5lhjn2sshvh03h2lsxyzg5eyfwt0760207q3hake25fs7l3psegtqdpgg3jhxcmjd9c8g6t0dcsx7e3qw35x2gzrdpshyem9cqzpgxqzjcfppjramjf8sxnvy3k8dq84kv56dy5gq9mlqs9qy9qsqsp5jvf69w282jdxkyt824dn0crxdentx8nvncfdt0ulqp75lvkjpagqqwpgcttpmfzaxc3akfn85jlu8cmtv5l2hu8q3yqttru8vlryg3vnewssy8w00yyfsghzqj03j45kj3uhhjek6q6e8djfu5u4gna6wjcqdsdhwe",
  //             "uri": "lightning:lnbc20n1p0qqw66pp5lhjn2sshvh03h2lsxyzg5eyfwt0760207q3hake25fs7l3psegtqdpgg3jhxcmjd9c8g6t0dcsx7e3qw35x2gzrdpshyem9cqzpgxqzjcfppjramjf8sxnvy3k8dq84kv56dy5gq9mlqs9qy9qsqsp5jvf69w282jdxkyt824dn0crxdentx8nvncfdt0ulqp75lvkjpagqqwpgcttpmfzaxc3akfn85jlu8cmtv5l2hu8q3yqttru8vlryg3vnewssy8w00yyfsghzqj03j45kj3uhhjek6q6e8djfu5u4gna6wjcqdsdhwe"
  //         }
  //     },
  //     {
  //         "id": "562dc6c2-ccf9-4e54-b680-7e7c49874736",
  //         "description": "Description of the Charge",
  //         "createdAt": "2019-12-23T04:13:50.578Z",
  //         "callbackUrl": "http://localhost/callback",
  //         "internalId": "3451818",
  //         "amount": "6000",
  //         "status": "completed",
  //         "invoice": {
  //             "expiresAt": "2019-12-23T04:23:50.724Z",
  //             "request": "lnbc60n1p0qq0h7pp5zrql5vkpn6507qffyt370eacp2pkedgx705h23yhsh0m0tkjyh2sdpgg3jhxcmjd9c8g6t0dcsx7e3qw35x2gzrdpshyem9cqzpgxqzjcfppjlq5hes6q5vvk904hku52e0a08hks64q89qy9qsqsp5ecnz3zm7ls3zkud3ppg3jg7l8h0ktesn4ru4mv6thrfke5fekcnqehgjsl8yqmumwj9f34dt82cad9tyww9xashl7c7r638tvv3pe8sspjkc5fqc8uyhadyh5gwj5az0xslhlhrd2q6gw9m9vvt6p9pfudqprdy7ks",
  //             "uri": "lightning:lnbc60n1p0qq0h7pp5zrql5vkpn6507qffyt370eacp2pkedgx705h23yhsh0m0tkjyh2sdpgg3jhxcmjd9c8g6t0dcsx7e3qw35x2gzrdpshyem9cqzpgxqzjcfppjlq5hes6q5vvk904hku52e0a08hks64q89qy9qsqsp5ecnz3zm7ls3zkud3ppg3jg7l8h0ktesn4ru4mv6thrfke5fekcnqehgjsl8yqmumwj9f34dt82cad9tyww9xashl7c7r638tvv3pe8sspjkc5fqc8uyhadyh5gwj5az0xslhlhrd2q6gw9m9vvt6p9pfudqprdy7ks"
  //         }
  //     },
  //     { ... },
  //     { ... },
  //     { ... },
  //     { ... }
  // ]
} catch(error) {
  console.log({ error });
}
```
----
## Creating Charge

Creates a new Charge with an Lightning Invoice attached to it.

```js
// Import the `createCharge` method
import { createCharge } from 'zebedee-nodejs';

// Set the payload
const payload = {
  expiresIn: 300,
  amount: "50000",
  description: 'My Custom Charge Description',
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
  //       "uri": "lightning:lnbc100n1p0yey6dpp5fnutjajv9jjv78vpad370rrqzxufqxk3fk2r3m6mk5fxpapq0v8qdpdf4ujqsm4wd6x7mfqgd5xzun8v5sygetnvdexjur5d9hkucqzpgxqzfvsp5rr6v38qxwqu0tnsh5aaqg6kf5k4w8k68n5cpxklr8trdawpytfcs9qy9qsqkxpafcvqgkjvtka0jplgfzumgl7csc7q455au09ucm3q948dey5nvysnpj3vqnvnnqvpz0l2jehlxpzq9d0mqd2vr7x60xd7dpmddkspke8a9c"
  //   }
  // }

} catch(error) {
  console.log({ error });
}
```
### Create Charge Params

|Attribute|Type|Required|Default|Description
|-|-|-|-|-
|expiresIn|*number*|No|300|The desired expiration time for this Charge (in seconds).
|amount|*string*|Yes||The Charge amount (in millisatoshis).
|description|*string*|No|"ZEBEDEE CHARGE"|The Charge description (also applied as the description to the associated BOLT11 Lightning invoice).
|callbackUrl|*string*|No|empty / NULL|The URL ZEBEDEE services will make a POST HTTP request to with information about the Charges's status updates.
|internalId|*string*|No|empty / NULL|An optional free-use attribute. Usually used by setting the Player/User ID of your Game/Application in order to link specific Charges to specific Players.

----
## Get Charge Details

Retrieves all the information related to a specific Charge.

```js
// Import the `getChargeDetails` method
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
  //   "unit": "msats",
  //   "amount": "10000",
  //   "createdAt": "2020-02-19T01:45:49.110Z",
  //   "internalId": "11af01d092444a317cb33faa6b8304b8",
  //   "callbackUrl": "http://your-website.com/callback",
  //   "description": "My Custom Charge Description",
  //   "status": "pending",
  //   "invoice": {
  //       "request": "lnbc100n1p0yey6dpp5fnutjajv9jjv78vpad370rrqzxufqxk3fk2r3m6mk5fxpapq0v8qdpdf4ujqsm4wd6x7mfqgd5xzun8v5sygetnvdexjur5d9hkucqzpgxqzfvsp5rr6v38qxwqu0tnsh5aaqg6kf5k4w8k68n5cpxklr8trdawpytfcs9qy9qsqkxpafcvqgkjvtka0jplgfzumgl7csc7q455au09ucm3q948dey5nvysnpj3vqnvnnqvpz0l2jehlxpzq9d0mqd2vr7x60xd7dpmddkspke8a9c",
  //       "expiresAt": "2020-02-19T01:50:49.059Z",
        // "uri": "lightning:lnbc100n1p0yey6dpp5fnutjajv9jjv78vpad370rrqzxufqxk3fk2r3m6mk5fxpapq0v8qdpdf4ujqsm4wd6x7mfqgd5xzun8v5sygetnvdexjur5d9hkucqzpgxqzfvsp5rr6v38qxwqu0tnsh5aaqg6kf5k4w8k68n5cpxklr8trdawpytfcs9qy9qsqkxpafcvqgkjvtka0jplgfzumgl7csc7q455au09ucm3q948dey5nvysnpj3vqnvnnqvpz0l2jehlxpzq9d0mqd2vr7x60xd7dpmddkspke8a9c"
  //   }
  // }

} catch(error) {
  console.log({ error });
}
```
### Get Charge Params

|Attribute|Type|Required|Default|Description
|-|-|-|-|-
|chargeId|*string*|YES||The chargeId for the Charge.

----
## Get All Withdrawal Requests

Retrieves all Withdrawal Requests

```js
// Import the `getAllWithdrawalRequests` method
import { getAllWithdrawalRequests } from 'zebedee-nodejs';

// Get All Withdrawal Requests
try {
  const response = await getAllWithdrawalRequests();

  // Response Example
  // [
  //     {
  //         "id": "80d65490-ebf6-46ae-8371-d85b1ee74dc2",
  //         "amount": "1000",
  //         "status": "pending",
  //         "internalId": "1234567890",
  //         "description": "My Description",
  //         "callbackUrl": "https://localhost/callback",
  //         "createdAt": "2019-12-23T03:58:17.993Z",
  //         "invoice": {
  //             "request": "lnurl1dp68gup69uhkkmmwvukhzcfw0fjkyetyv4jjucmvda6kgw3cxqcrqtmkxqhhw6t5dpj8ycthv9kz6un9w96k2um5wvkhqcted3hkzeplwdjkxun9ws7nwc34vsenwvf5xymnqvpjxf3nxcnrx33nzc3cx5cnzdmyvcenydesv56kyerxxv6kgcenv4skyvnyx5ckzepjvgurgcmxv56rjep5vs30e289",
  //             "expiresAt": "2019-12-23T04:08:18.038Z",
  //             "uri": "lightning:lnurl1dp68gup69uhkkmmwvukhzcfw0fjkyetyv4jjucmvda6kgw3cxqcrqtmkxqhhw6t5dpj8ycthv9kz6un9w96k2um5wvkhqcted3hkzeplwdjkxun9ws7nwc34vsenwvf5xymnqvpjxf3nxcnrx33nzc3cx5cnzdmyvcenydesv56kyerxxv6kgcenv4skyvnyx5ckzepjvgurgcmxv56rjep5vs30e289"
  //         }
  //     },
  //     {
  //         "id": "80d65490-ebf6-46ae-8371-d85b1ee74dc2",
  //         "amount": "1000",
  //         "status": "pending",
  //         "internalId": "1234567890",
  //         "description": "My Description",
  //         "callbackUrl": "https://localhost/callback",
  //         "createdAt": "2019-12-23T03:58:17.993Z",
  //         "invoice": {
  //             "request": "lnurl1dp68gup69uhkkmmwvukhzcfw0fjkyetyv4jjucmvda6kgw3cxqcrqtmkxqhhw6t5dpj8ycthv9kz6un9w96k2um5wvkhqcted3hkzeplwdjkxun9ws7nwc34vsenwvf5xymnqvpjxf3nxcnrx33nzc3cx5cnzdmyvcenydesv56kyerxxv6kgcenv4skyvnyx5ckzepjvgurgcmxv56rjep5vs30e289",
  //             "expiresAt": "2019-12-23T04:08:18.038Z",
  //             "uri": "lightning:lnurl1dp68gup69uhkkmmwvukhzcfw0fjkyetyv4jjucmvda6kgw3cxqcrqtmkxqhhw6t5dpj8ycthv9kz6un9w96k2um5wvkhqcted3hkzeplwdjkxun9ws7nwc34vsenwvf5xymnqvpjxf3nxcnrx33nzc3cx5cnzdmyvcenydesv56kyerxxv6kgcenv4skyvnyx5ckzepjvgurgcmxv56rjep5vs30e289"
  //         }
  //     },
  //     { ... },
  //     { ... },
  // ]
} catch(error) {
  console.log({ error });
}
```
----
## Creating Withdrawal Request

Creates a Withdrawal Request with an attached LNURL code.

```js
// Import the `createWithdrawalRequest` method
import { createWithdrawalRequest } from 'zebedee-nodejs';

// Set the payload
const payload = {
  expiresIn: 300,
  amount: "50000",
  description: 'My Custom Withdrawal Description',
  callbackUrl: 'https://yourapp.com/callback',
  internalId: '11af01d092444a317cb33faa6b8304b8',
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


### Create Withdraw Request Params

|Attribute|Type|Required|Default|Description
|-|-|-|-|-
|expiresIn|*number*|No|300|The desired expiration time for this Charge (in seconds).
|amount|*string*|Yes||The Charge amount (in millisatoshis).
|description|*string*|No|"ZEBEDEE WITHDRAWAL"|The Charge description (also applied as the description to the associated BOLT11 Lightning invoice).
|callbackUrl|*string*|No|empty / NULL|The URL ZEBEDEE services will make a POST HTTP request to with information about the Charges's status updates.
|internalId|*string*|No|empty / NULL|An optional free-use attribute. Usually used by setting the Player/User ID of your Game/Application in order to link specific Charges to specific Players.

----

## Get Withdrawal Request Details

Retrieves information on a specific withdrawal request

```js
// Import the `getWithdrawalRequestDetails` method
import { getWithdrawalRequestDetails } from 'zebedee-nodejs';

const withdrawalRequestId = '80d65490-ebf6-46ae-8371-d85b1ee74dc2';

// Get Withdrawal Request Details
try {
  const response = await getWithdrawalRequestDetails(withdrawalRequestId);

  // Response Example
  // {
  //     "id": "80d65490-ebf6-46ae-8371-d85b1ee74dc2",
  //     "amount": "1000",
  //     "status": "pending",
  //     "internalId": "1234567890",
  //     "description": "My Description",
  //     "callbackUrl": "https://localhost/callback",
  //     "createdAt": "2019-12-23T03:58:17.993Z",
  //     "invoice": {
  //         "request": "lnurl1dp68gup69uhkkmmwvukhzcfw0fjkyetyv4jjucmvda6kgw3cxqcrqtmkxqhhw6t5dpj8ycthv9kz6un9w96k2um5wvkhqcted3hkzeplwdjkxun9ws7nwc34vsenwvf5xymnqvpjxf3nxcnrx33nzc3cx5cnzdmyvcenydesv56kyerxxv6kgcenv4skyvnyx5ckzepjvgurgcmxv56rjep5vs30e289",
  //         "expiresAt": "2019-12-23T04:08:18.038Z",
  //         "uri": "lightning:lnurl1dp68gup69uhkkmmwvukhzcfw0fjkyetyv4jjucmvda6kgw3cxqcrqtmkxqhhw6t5dpj8ycthv9kz6un9w96k2um5wvkhqcted3hkzeplwdjkxun9ws7nwc34vsenwvf5xymnqvpjxf3nxcnrx33nzc3cx5cnzdmyvcenydesv56kyerxxv6kgcenv4skyvnyx5ckzepjvgurgcmxv56rjep5vs30e289"
  //     }
  // }
} catch (error) {
  console.log({ error });
}
```

### Get Withdraw Request Details Params

|Attribute|Type|Required|Default|Description
|-|-|-|-|-
|withdrawalRequestId|*string*|Yes||The id of the withdraw request.

----

## Get All Payments

Retrieves all the Payments created by this key.

```js
// Import the `getAllPayments` method
import { getAllPayments } from 'zebedee-nodejs';

// Get All Payments
try {
  const response = await getAllPayments();

  // Response Example
  // [
  //   {
  //     "id": "a15a3fbc-a9dc-493a-8497-1e428cf9c1ba",
  //     "fee": "1000",
  //     "amount": "1000",
  //     "description": "My Payment Description",
  //     "updatedAt": "2020-01-01T20:27:29.896Z",
  //     "processedAt": "2020-01-01T20:27:29.896Z"
  //   },
  //   {
  //       "id": "d3fw3fbc-c2dc-393a-8s37-f28s8cf9c15b",
  //       "fee": "1000",
  //       "amount": "20001",
  //       "description": "My Payment Description2",
  //       "updatedAt": "2020-01-01T20:27:29.896Z",
  //       "processedAt": "2020-01-01T20:27:29.896Z"
  //   },
  //   { ... },
  //   { ... },
  // ]
} catch(error) {
  console.log({ error });
}
```

----

## Making Payment

Pays a Lightning Invoice.

```js
// Import the `makePayment` method
import { makePayment } from 'zebedee-nodejs';

// Set the payload
const payload = {
  invoice: 'lnbc10.....',
  description: 'My New Description',
  internalId: '11af01d092444a317cb33faa6b8304b8',
  callbackUrl: 'https://myapp.com/callback',
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

### Make Payment Params

|Attribute|Type|Required|Default|Description
|-|-|-|-|-
|invoice|*string*|Yes||The Lightning invoice that is meant to be paid.
|description|*string*|No|"ZEBEDEE PAYMENT"|The Payment description (only used for internal record-keeping).
|callbackUrl|*string*|No|empty / NULL|The URL ZEBEDEE services will make a POST HTTP request to with information about the Payment's status updates.
|internalId|*string*|No|empty / NULL|An optional free-use attribute. Usually used by setting the Player/User ID of your Game/Application in order to link specific Charges to specific Players.

----

## Get Payment Details

Retrieves all the information related to a specific Payment.

```js
// Import the `getPaymentDetails` method
import { getPaymentDetails } from 'zebedee-nodejs';

const paymentId = 'a15a3fbc-a9dc-493a-8497-1e428cf9c1ba';

// Get Withdrawal Request Details
try {
  const response = await getPaymentDetails(paymentId);

  // Response Example
  // {
  //     "id": "a15a3fbc-a9dc-493a-8497-1e428cf9c1ba",
  //     "fee": "1000",
  //     "amount": "1000",
  //     "description": "My Payment Description",
  //     "updatedAt": "2020-01-01T20:27:29.896Z",
  //     "processedAt": "2020-01-01T20:27:29.896Z"
  // }
} catch (error) {
  console.log({ error });
}
```

### Get Payment Details Params

|Attribute|Type|Required|Default|Description
|-|-|-|-|-
|paymentId|*string*|Yes||The id of the payment.

----

## Webhooks

Use the `callbackUrl` properties in the `Charge` and `WithdrawalRequest` payloads to receive webhook calls. These webhooks are invoked when your Charge/WithdrawalRequest succeeds, fails, or when it eventually expires.

Webhooks give you more access to these entities' lifecycle.

## Contributions

ZEBEDEE is a big proponent of Open Source Software. We welcome PRs and contributions to the SDK and will try to review issues and PRs as soon as we can.
