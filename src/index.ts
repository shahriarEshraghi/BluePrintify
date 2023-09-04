#! /usr/bin/env node 
const fs = require("fs");
const path = require('path');
const figlet = require("figlet");
const { Command } = require('@commander-js/extra-typings');

const program = new Command();

const filePath = path.join(__dirname,'../sample/sample.txt');

function textModifier(username:string,programmingLang:string){
        let textFile = "";
        fs.readFile(filePath,'utf-8',function(err:any , data:string){
        if(err){
            console.error(err);
        }
         console.log(data)
         textFile = data
        });
    
    const pattern = /<\?USER_NAME\?>|<\?PROGRAMMING_LANG\?>/g;
    
    var patterObj = {
        '<?USER_NAME?>':"dog",
        '<?PROGRAMMING_LANG?>':"goat",
     };
     console.log(textFile);
     let message =  '';
         message = textFile.replace(pattern,username);
    
    
    console.log(message);
}

textModifier('Shahriar','javascript');

// file.replace('/<\?USER_NAME\?>/g','shahriar');