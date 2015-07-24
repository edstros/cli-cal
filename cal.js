#!/usr/bin/env node

var zeller = require('./lib/zeller');

var month = process.argv[2];
var year = process.argv[3];

console.log(zeller(month, year));
