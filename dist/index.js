#! /usr/bin/env node 
"use strict";
const fs = require("fs");
const path = require('path');
const figlet = require("figlet");
const { Command } = require('@commander-js/extra-typings');
const { program } = require('commander');
const filePath = path.join(__dirname, '../sample/sample.txt');
const data = fs.readFileSync(filePath);
console.log(filePath);
console.log(data.toString());
// program
//   .option('--first')
//   .option('-s, --separator <char>');
// program.parse();
// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));
//# sourceMappingURL=index.js.map