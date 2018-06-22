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

numberFindCore.gameStart();
