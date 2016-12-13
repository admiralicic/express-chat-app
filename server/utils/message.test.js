var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'John';
    var text = 'Test message';
    var message = generateMessage(from, text);

    expect(message).toBeDefined;
    expect(message).toInclude({ from, text });
    expect(message.createdAt).toBeA('number');
  });

});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'Admin';
    var latitude = 44.5375546;
    var longitude = 18.6399149;
    var url = 'https://www.google.com/maps?q=44.5375546,18.6399149';
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage).toBeDefined;
    expect(locationMessage).toInclude({ from, url });
    expect(locationMessage.createdAt).toBeA('number');
  });
});