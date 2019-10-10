'use strict';

const Q = require('@nmq/q/server');
Q.start();

const network = new Q('network');
network.monitorEvent('connection');
network.monitorEvent('attacker');
network.monitorEvent('no-connection');
network.monitorEvent('disconnected');
