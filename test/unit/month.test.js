var should = require('chai').should();

describe('Month', function () {
  describe('currentMonth', function () {
    it('should return the current month', function () {
      var h = [0, 1, 2, 3, 4, 5, 6];
      var output = array.filter(function (item) {
        return item % 2;
        //filter out even numbers
      });
      output.should.eql([1, 3, 5]);
    });
  });
});
