const { format, fromUnixTime } = require('date-fns');
const { utcToZonedTime, zonedTimeToUtc } = require('date-fns-tz');

// Unix to Local String Conversion
function unixToLocalString(
  unixTimestamp,
  timeZone = 'UTC',
  dateFormat = 'yyyy-MM-dd HH:mm:ssXXX'
) {
  try {
    const date = fromUnixTime(unixTimestamp);
    const zonedDate = utcToZonedTime(date, timeZone);
    return format(zonedDate, dateFormat, { timeZone });
  } catch (error) {
    console.error('Error converting Unix timestamp to local string:', error);
    return null; // or return an appropriate default value or error message
  }
}

// IST to EST Conversion
function istToEst(dateString, dateFormat = 'yyyy-MM-dd HH:mm:ssXXX') {
  try {
    const istTimeZone = 'Asia/Kolkata';
    const estTimeZone = 'America/New_York';
    const istDate = utcToZonedTime(new Date(dateString), istTimeZone);
    const estDate = zonedTimeToUtc(istDate, istTimeZone);
    const estZonedDate = utcToZonedTime(estDate, estTimeZone);
    return format(estZonedDate, dateFormat, { timeZone: estTimeZone });
  } catch (error) {
    console.error('Error converting IST to EST:', error);
    return null; // or return an appropriate default value or error message
  }
}

module.exports = { unixToLocalString, istToEst };
