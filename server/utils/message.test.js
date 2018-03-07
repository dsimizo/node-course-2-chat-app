var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Daniel';
    var text = 'Hellooo';
    var message = generateMessage(from, text);

    // expect(message.from).toBe(from);
    // expect(message.text).toBe(text);
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 14;
    var longitude = 12;
    var locationMessage = generateLocationMessage(from, latitude, longitude);
    var url = `https://www.google.com/maps?q=14,12`;

    expect(locationMessage).toInclude({from, url});
    expect(locationMessage.createdAt).toBeA('number');
  });
})
