const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Daniel',
    text: 'Hi, how are you?',
    createdAt: 123456
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  // socket.emit('newEmail', {
  //   from: 'mike@example.com',
  //   text: 'Hey, what is going on',
  //   createdAt: 123
  // });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  })
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
})
