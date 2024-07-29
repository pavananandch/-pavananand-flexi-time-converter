import { unixToLocalString, istToEst } from './index.js';

// Test Unix to Local String Conversion
const unixTimestamp = 1625097600; // Example Unix Timestamp
const invalidUnixTimestamp = 'invalid';

console.log(
  'Valid Unix to Local String Conversion (IST):',
  unixToLocalString(unixTimestamp, 'Asia/Kolkata')
);
console.log(
  'Valid Unix to Local String Conversion (EST):',
  unixToLocalString(unixTimestamp, 'America/New_York')
);
console.log(
  'Invalid Unix to Local String Conversion:',
  unixToLocalString(invalidUnixTimestamp, 'Asia/Kolkata')
);

// Test IST to EST Conversion
const istDateString = '2023-07-01 10:00:00'; // Example IST date string
const invalidDateString = 'invalid-date';

console.log('Valid IST to EST Conversion:', istToEst(istDateString));
console.log('Invalid IST to EST Conversion:', istToEst(invalidDateString));
