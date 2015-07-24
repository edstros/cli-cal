var zeller = require('zeller');


var month = {};
month.topLine = function () {
  var d = new Date();
  var getMonth = d.getMonth();
  var getFullYear = d.getFullYear();
  var m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthYear = m[getMonth] + ' ' + getFullYear + '\n' + 'Su Mo Tu We Th Fr Sa';
}
month.daysInMonth = function () {
  var count = [31,28,31,30,31,30,31,31,30,31,30,31];
  var d = new Date();
  var getMonth = d.getMonth() + 1;
  var getFullYear = d.getFullYear();
  var J = Math.floor(year / 100);
  var K = year % 100;
}
function getMonths(month,  year) {

};

module.exports = month;
