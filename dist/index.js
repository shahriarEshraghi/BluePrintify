#! /usr/bin/env node 
"use strict";
const fs = require("fs");
const path = require('path');
const figlet = require("figlet");
const { Command } = require('@commander-js/extra-typings');
const program = new Command();
const filePath = path.join(__dirname, '../sample/sample.txt');
const exportPath = path.join(__dirname, '../sample/export.txt');
console.log(filePath);
function textModifier(username, programmingLang) {
    const textFile = fs.readFileSync(filePath, 'utf-8');
    const pattern = /<\?([A-Z_]+)\?>/g;
    const patternObj = {
        '<?USER_NAME?>': username,
        '<?PROGRAMMING_LANG?>': programmingLang,
    };
    let message = '';
    message = textFile.replace(pattern, function (matched) {
        return patternObj[matched];
    });
    fs.writeFile(exportPath, message, (error) => {
        if (error) {
            console.error(error);
        }
    });
}
textModifier('AmirKian', 'Node js');
// file.replace('/<\?USER_NAME\?>/g','shahriar');
//# sourceMappingURL=index.js.map