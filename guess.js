'use strict';

let guessCore = require('./guessCore.js')

global.getUserResponse=function(){
    process.stdin.once('data', (chunk) => {
    guessCore.handleInput(chunk);
});
}
global.say=function(input){
    console.log(input);
}

global.exit=function(){
    process.exit()
}

guessCore.gameStart()

















    





