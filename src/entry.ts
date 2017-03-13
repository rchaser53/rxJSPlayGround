import * as io from 'socket.io-client';

const socket = io();
socket.on('connect', (event) =>{
  console.log(1, event);
});

socket.on('event', (data) =>{
  console.log(2, data);
});

socket.on('disconnect', (event) =>{
  console.log(3, event);
});

window.onload = () => {
  document.querySelector('#poyo').addEventListener('change', (event) => {
    socket.emit('poyo', (event.target as any).value);
  });
}
