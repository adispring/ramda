var R = require('..');
var eq = require('./shared/eq');


describe('or', function() {
  it('compares two values with js ||', function() {
    eq(R.or(true, true), true);
    eq(R.or(true, false), true);
    eq(R.or(false, true), true);
    eq(R.or(false, false), false);
    eq(R.or(0, 2), 2);
    eq(R.or(0, false), false);
    eq(R.or(1, 2), 1);
    eq(R.or(1, false), 1);
  });

});
