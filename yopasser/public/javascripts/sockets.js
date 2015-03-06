var socket = new WebSocket('ws://localhost:3000/comm')
socket.onopen = function() {
  console.log('connection opened');
  $('#send').removeClass('disabled');
}
socket.onmessage = function(message) {
  console.log('received message: ' + message.data);
  $('#messages').append(message.data);
}
socket.onclose = function() {
  console.log('connection closed');
  $('#send').addClass('disabled');
}
