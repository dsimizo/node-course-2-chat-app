var socket = io();

socket.on('connect', function() {
  console.log('Connected to the server');
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
