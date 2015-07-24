

describe('Month', function () {
  describe('currentMonth', function () {
    it('should return the current month', function () {
      var mons = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
  return mons[month - 1] + ' ' + day + ', ' + year + ' = ' + days[zeller(month, day, year)];
      });
      output.should.eql([1, 3, 5]);
    });
  });
});
