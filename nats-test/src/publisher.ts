import nats from 'node-nats-streaming';

console.clear();

// client is stan, stan is nats backwards, stan connects to the streaming server
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Publisher connected to NATS');

  // data is normally called message but in this example it is an event we are replicating
  // and that event triggers some data that needs to be passed along
  const data = JSON.stringify({
    id: '123',
    title: 'concert',
    price: 20,
  });

  stan.publish('ticket:created', data, () => {
    console.log('Event Published');
  });
});
