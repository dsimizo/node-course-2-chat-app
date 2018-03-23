const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var validation = isRealString(12);

    expect(validation).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var validation = isRealString('   ');

    expect(validation).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var validation = isRealString('  teste  ');

    expect(validation).toBe(true);
  });
});
