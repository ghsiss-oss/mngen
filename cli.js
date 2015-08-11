#!/usr/bin/env node
'use strict';
var meow = require('meow');
var mnGen = require('./');

var cli = meow({
	help: [
		'Examples',
		'  $ mngen',
		'  tokyo',
		'',
		'  $ mngen --glue 2',
		'  english-legal',
		'',
    '  $ mngen --list 3',
    '  canoe amigo kermit',
    '',
    '  $ mngen --list 2 --glue 3',
    '  oxford-soviet-rubber shave-deal-freddie',
    '',
		'Options',
		'  --list [number]  Get a whitespace separated list of words',
		'  --glue [number]  Make each word a dash-joined combo of words'
	]
});

var list = typeof cli.flags.list === 'boolean' ? 100 : cli.flags.list;
var glue = cli.flags.glue || 1;

console.log(cli.flags.list ? mnGen.list(list, glue).join(' ') : mnGen.word(glue));
