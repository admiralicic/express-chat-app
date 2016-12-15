const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var input1 = 23;
    var input2 = {};

    expect(isRealString(input1)).toBe(false);
    expect(isRealString(input2)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('    ')).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    expect(isRealString('  string ')).toBe(true);
  });
});