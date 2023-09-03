#! /usr/bin/env node 
const figlet = require("figlet");
const fs = require("fs");
const  {Command} = require('@commander-js/extra-typings');
const { program } = require('commander');

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
