#!/usr/bin/env node

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

/* Create a config */
const config = new Conf();

const argv = process.argv.slice(2);
/* Launch the helper */
helpers(argv);

/** @constant
    @type {string|array}
    @default
*/
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};


cash(command);
