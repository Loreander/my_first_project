'use strict';

let numberFindCore = require('./numberFind-core.js')

global.userInput = function() {
    process.stdin.once('data', (chunk) => {
    numberFindCore.handleInput(chunk);
 });
}

global.display = function(message) {
    console.log(message);
}

global.exit = function(){
    process.exit()
}

global.usingJava = true;
function javaIntro() {
    display("I've thought of a number between 1-100\nGo!!!");
    numberFindCore.gameStart()
}

javaIntro();
