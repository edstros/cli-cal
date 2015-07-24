#!/usr/bin/env node
module.exports =
   function (month, year){ /* returns 0-6 where 0=sunday, 1=monday, etc....*/
 var day = 1;
    if (month < 3) { month += 12; year -= 1; }
//  var m = month;
  var K = year % 100;
  var J = Math.floor(year / 100);
  //var q = day;
  var h = (day + Math.floor(((month + 1) * 13) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + 5 * J) % 7;
  return h;
}
/***
 *
 *      /    |(m+1)*26|       | y |       | y |   | y |  \
 * h = | q + |--------| + y + |---| + 6 * |---| + |---|   | mod 7
 *      \    |   10   |       | 4 |       |100|   |400|  /
 *
 ***/
// modified from http://bit.ly/1gSBjCt
