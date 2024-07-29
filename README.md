# Timestamp Converter

A JavaScript module for converting Unix timestamps to local strings and for converting between IST and EST time zones.

## Features

- Convert Unix timestamps to local date-time strings in various time zones.
- Convert date-time strings from IST to EST.

## Installation

You can install this module via npm:

```bash
npm install timestamp-converter

Usage
Convert Unix Timestamp to Local Date-Time String

const { unixToLocalString } = require('timestamp-converter');

// Example Unix Timestamp
const unixTimestamp = 1625097600; // Unix timestamp for 2021-07-01 00:00:00 UTC

// Convert to IST
const localTimeIst = unixToLocalString(unixTimestamp, 'Asia/Kolkata');
console.log('Local Time (IST):', localTimeIst);

// Convert to EST
const localTimeEst = unixToLocalString(unixTimestamp, 'America/New_York');
console.log('Local Time (EST):', localTimeEst);
```

Convert IST to EST

```bash
const { istToEst } = require('timestamp-converter');

// Example IST Date-Time String
const istDateString = '2023-07-01 10:00:00';

// Convert IST to EST
const estDateString = istToEst(istDateString);
console.log('IST to EST:', estDateString);
```

License
This project is licensed under the MIT License.

Author
Your Pavan Anand

