function formatMyDate(value, locale = 'en-GB') {
    return new Date(value).toLocaleDateString(locale);
}

const timestamp = '2021-09-01T15:21:39.862Z';
console.log('Timestamp:', timestamp);
console.log('Formatted date:', formatMyDate(timestamp));