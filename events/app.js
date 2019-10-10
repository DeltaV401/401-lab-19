'use strict';

const hub = require('./hub');
const readFile = require('./readFile');
const toUpper = require('./toUpper');
const writeFile = require('./writeFile');
const uuid = require('uuid');

require('./logger');
require('./network-logger');
require('./q-logger');

const alterFile = (file) => {
  return readFile(file)
    .then(text => toUpper(text))
    .then(text => writeFile(file, text))
    .catch(err => {
      hub.emit('error', err);
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);

const Q = require('@nmq/q/client');
setInterval(() => {
  Q.publish('network', 'attacker', uuid());
}, 30);
