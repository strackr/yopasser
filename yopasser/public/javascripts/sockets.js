var host = location.origin.replace(/^http/, 'ws')
var socket = new WebSocket(host + '/comm')
socket.onopen = function() {
  console.log('connection opened');
  $('#send').click(function() {
    console.log('sending: Yo!');
    socket.send('Yo!');
  });
  $('#send').removeClass('disabled');
}
socket.onmessage = function(message) {
  console.log('received message: ' + message.data);
  $('#messages').append('<div class="badge">' + message.data + '</div>');
}
socket.onclose = function() {
  console.log('connection closed');
  $('#send').addClass('disabled');
}
