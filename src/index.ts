#!/usr/bin/env ts-node
const fs = require("fs");
const path = require('path');
const figlet = require("figlet");
const prompts = require('prompts');
// const chalk = require('chalk');
const { Command } = require('@commander-js/extra-typings');

const program = new Command();

const filePath = path.join(__dirname,'../sample/sample.txt');
const exportPath = path.join(__dirname,'../sample/export.txt')

interface Pattern {
    [key: string]: string;
}
interface Prompts {
    type: String ,
    name: String,
    message: String,  
}

function commander(){
    program
        .version('0.1.0')
        .description('a CLI that create new project based on your custom template or existed project')
        .parse(process.argv);
}
    const userInfo: Prompts[] =[
        {
        type: 'text',
        name: 'username',
        message: 'What is your username ?'
        },
        {
        type: 'text',
        name: 'programmingLang',
        message: 'What is your favorite Programming language ?'
        },
    ];
    
    (async()=>{
        commander();
        const response = await prompts(userInfo);
        textModifier(response.username,response.programmingLang)
    })();

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
    console.log(message);
    fs.writeFile(exportPath,message,(error:string) =>{
        if(error){
            console.error(error)
        }
    })
}