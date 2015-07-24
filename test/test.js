#!/usr/bin/env node
var should = require('chai').should();
//var month = require('../lib/month');
var zeller = require('../lib/zeller');

describe('Tests', function () {
  it('truthyness', function () {
    true.should.equal(true);
  });
});
describe('zeller', function (){
  it('should return correct March 2015 ', function(){
    zeller(3, 2015).should.equal(1);
  });
});
