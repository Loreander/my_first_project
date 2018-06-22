'use strict';

let computerguess;
let userresponse;
let computerlow;
let computerhigh;

function gameStart(){
    computerlow = 1
    computerhigh = 100 
    say("The game has begun!\nThink of a number between 0-100")
    computerGuess()
}

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerGuess(){
    computerguess = getRndInt(computerlow, computerhigh)
    say("Is it " + computerguess + "?")
    getUserResponse()
}

function handleInput(input) {
    userresponse = input.toString().trim();
    verifyUserResponse();
}

function verifyUserResponse(){
    if (userresponse === "h") {
    computerlow = computerguess + 1
    say ("higher...")
    computerGuess()
    }

    if (userresponse === "l") {
    computerhigh = computerguess - 1
    say ("lower...")
    computerGuess()
    }

    if (userresponse === "y") {
    say ("YOU WIN!!!")
    exit()
    }
}

module.exports = {
    handleInput: handleInput,
    gameStart: gameStart
}






