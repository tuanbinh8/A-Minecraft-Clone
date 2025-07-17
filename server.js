const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;

app.use(express.static('public'));

io.on('connection', socket => {
  io.emit('state', socket);
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
