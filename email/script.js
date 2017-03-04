//var socket = io.connect('http://localhost:3000');
var socket = io.connect('https://email-con-tilde.herokuapp.com');

function send() {
  socket.emit('push', {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value
  })
};

socket.on('feedback', function(data) {
  console.log(data.fb);
});
