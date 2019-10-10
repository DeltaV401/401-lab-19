const Q = require('@nmq/q/client');
const hub = require('./hub');

initializeLogger();

function initializeLogger() {
  console.log('Q connected!');

  hub.on('connection', log('connection'));
  hub.on('attacker', log('attacker'));
  hub.on('disconnected', log('disconnected'));
  hub.on('no-connection', log('no-connection'));

  function log(eventType) {
    return payload => {
      Q.publish('network', eventType, payload);
    };
  }
}
