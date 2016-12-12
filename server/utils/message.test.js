var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'John';
    var text = 'Test message';
    var message = generateMessage(from, text);

    expect(message).toBeDefined;
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});