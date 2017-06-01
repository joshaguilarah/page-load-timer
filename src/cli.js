#!/usr/bin/env node

import parseArgs from 'minimist';
import getPageLoadTimeAverage from './';

const options = parseArgs(process.argv);

getPageLoadTimeAverage(options);
