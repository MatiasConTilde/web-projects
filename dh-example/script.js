const socket = io.connect('https://dh-example.herokuapp.com');
// const socket = io.connect('http://localhost:3000');

// From https://stackoverflow.com/a/5989549 adapted to ES6 arrow function
const powMod = (base, exp, mod) => exp === 0 ? 1 : exp % 2 === 0 ? Math.pow(powMod(base, exp / 2, mod), 2) % mod : base * powMod(base, exp - 1, mod) % mod;

let order, p, lower, upper, secret;

socket.on('order', data => {
  order = data.order;
  switch(order) {
    case 1:
    document.getElementById('info').innerHTML += 'You are the first user';
    break;
    case 2:
    document.getElementById('info').innerHTML += 'You are the second user';
    break;
    defalut:
    document.getElementById('info').innerHTML += 'Too many users, you are disconnected';
  }
});

function requestPG() {
  // Request p and g with parameters
  socket.emit('requestPG', {
    easy: document.getElementById('easy-numbers').checked,
    prm: document.getElementById('prm-check').checked
  });
}

socket.on('pg', data => {
  p = data.p;
  document.getElementById('pg').innerHTML = '<code>p = ' + p + '</code><br><code>g = ' + data.g + '</code>';

  lower = Math.floor(Math.random() * p);
  document.getElementById('lower').innerHTML = '<code>' + (order==1?'a':'b') + ' = ' + lower + '</code>';

  upper = powMod(data.g, lower, p);
  document.getElementById('upper').innerHTML = '<code>' + (order==1?'A':'B') + ' = g^' + (order==1?'a':'b') + ' mod p = ' + data.g + '^' + lower + ' mod ' + p + ' = ' + upper + '</code><br><button onclick="sendUpper()">Send <code>' + (order==1?'A':'B') + '</code></button>';
  sendUpper();
});

function sendUpper() {
  document.getElementById('sending').innerHTML = 'Sending <code>' + (order==1?'A':'B') + '</code>...';
  socket.emit('sendUpper', { upper });
  document.getElementById('sending').innerHTML = 'Sent <code>' + (order==1?'A':'B') + '</code>';
}

socket.on('recieveUpper', data => {
  document.getElementById('recieved').innerHTML = 'Recieved <code>' + (order==1?'B':'A') + ' = ' + data.upper + '</code>';
  secret = powMod(data.upper, lower, p);
  console.log(data.upper, lower, p, secret);
  document.getElementById('secret').innerHTML = 'Secret key <code>s = ' + (order==1?'B':'A') + '^' + (order==1?'a':'b') + ' mod p = ' + data.upper + '^' + lower + ' mod ' + p + ' = ' + secret + '</code>';
});
