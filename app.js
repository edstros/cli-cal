/*var h = {
  '0': 'Sa',
  '1': 'Su',
  '2': 'Mo',
  '3': 'Tu',
  '4': 'We',
  '5': 'Th',
  '6': 'Fr'
};*/
var q = 1;
var m = {
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'January',
  'February'
};
var K = function (theYear) {
  return year % 100;
};
var J = function (theCentury) {
  return Math.floor(century / 100);
};
/*test for July 1, 2015*/

function cal(cb) {
/*
  var day = h['4'];
  console.log(day);
  var date = q['1'];
  var month = m['7'];
  var year = 15;
  var cent = 2000;*/
  return ((date + Math.floor(((month + 1) * 13) / 5) + year + Math.floor(year / 4) + Math.floor(cent / 4) + (5 * cent)) % 7);

  console.log(cb());
}
