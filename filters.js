// filters.js

const { DateTime } = require("luxon");

module.exports = function (dateString) {
  const date = DateTime.fromISO(dateString, { locale: "fr" });

  return date.toFormat("cccc dd LLLL yyyy");
};
