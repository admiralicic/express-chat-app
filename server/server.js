const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('Message created', message);
  
    socket.emit('newMessage', {
      from: 'John',
      text: 'See ya then',
      createdAt: 123
    });
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});