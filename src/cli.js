#!/usr/bin/env node

import parseArgs from 'minimist';
import getPageLoadTimeAverage from './';

const options = parseArgs(process.argv);

if (!options || !options.url || !options.numRequests) {
  console.error('Required parameters not specified.');
  console.error('Usage: page-load-timer --url=<string> --numRequests=<integer>');
  process.exit(1);
}

getPageLoadTimeAverage(options);
