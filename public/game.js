const socket = io();
socket.on('state', data => console.log(data));
socket.on('connect', () => {
    console.log('connected');
})
