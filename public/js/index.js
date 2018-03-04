var socket = io();

socket.on('connect', function() {
  console.log('Connected to the server');

  socket.emit('createMessage', {
    from: 'John',
    text: 'I am fine'
  });

  // socket.emit('createEmail', {
  //   to: 'jen@example.com',
  //   text: 'Hey, this is Daniel.'
  // });

});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

// Custom event
// socket.on('newEmail', function(email) {
//   console.log('New email', email);
// });
