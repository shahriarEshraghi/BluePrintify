#!/usr/bin/env ts-node
const fs = require("fs");
const path = require('path');
const figlet = require("figlet");
const { Command } = require('@commander-js/extra-typings');

const program = new Command();

const filePath = path.join(__dirname,'../sample/sample.txt');
const exportPath = path.join(__dirname,'../sample/export.txt')

interface Pattern {
    [key: string]: string;
}

function commander(){
    program
        .version('0.1.0')
        .description('a CLI that create new project based on your custom template or existed project')
        .parse(process.argv);
}

function textModifier(username:string,programmingLang:string){
    const textFile = fs.readFileSync(filePath,'utf-8');
    
    const pattern = /<\?([A-Z_]+)\?>/g;
    
    const patternObj:Pattern = {
        '<?USER_NAME?>': username,
        '<?PROGRAMMING_LANG?>':programmingLang,
     };
     let message =  '';
         message = textFile.replace(pattern,function(matched:string){
            return patternObj[matched]
         });
    
    commander()
    fs.writeFile(exportPath,message,(error:string) =>{
        if(error){
            console.error(error)
        }
    })
}

textModifier('AmirKian','Node js');
