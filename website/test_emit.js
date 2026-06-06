const io = require('socket.io-client');

const SERVER = process.env.SERVER || 'http://localhost:5001';
const socket = io(SERVER, { transports: ['websocket'], reconnection: true });

socket.on('connect', () => {
  console.log('connected as', socket.id);
  const sessionId = 'test-session-' + Math.floor(Math.random()*10000);
  socket.emit('register_session', { sessionId });
  console.log('registered session', sessionId);

  // send live message
  socket.emit('live_message', { sessionId, text: 'Hello from automated test_emit.js' });
  console.log('emitted live_message');
});

socket.on('agent_message', (data) => {
  console.log('agent_message received:', data);
  socket.disconnect();
  process.exit(0);
});

socket.on('connect_error', (err) => {
  console.error('connect_error', err.message || err);
  process.exit(2);
});

setTimeout(() => {
  console.error('No agent_message received within timeout');
  socket.disconnect();
  process.exit(3);
}, 10000);
