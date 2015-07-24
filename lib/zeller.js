/***
 *
 *      /    |(m+1)*26|       | y |       | y |   | y |    \
 * h = | q + |--------| + y + |---| + 6 * |---| + |---| - 1 | mod 7
 *      \    |   10   |       | 4 |       |100|   |400|    /
 *
 ***/
function zeller(month, day, year) /* returns 0-6 where 0=sunday, 1=monday, etc....*/ {
  if (month < 3) {
    month += 12;
    year -= 1;
  }
  var h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
  return h;
}

function demo(month, day, year) {
  var mons = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return mons[month - 1] + ' ' + day + ', ' + year + ' = ' + days[zeller(month, day, year)];
}
