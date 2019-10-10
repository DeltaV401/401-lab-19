const Q = require('@nmq/q/client');

const network = new Q('network');

network.subscribe('attacker', payload => {
  console.warn(`FASTEN DOWN THE HATCHES! MAN THE SAILS! WE'RE UNDER ATTACK BY ${payload}!`);
});

network.subscribe('connection', payload => {
  console.log('We arrrrr connected.', payload);
});

network.subscribe('disconnected', payload => {
  console.log(`They've had a wee bit too much rum.`, payload);
});
