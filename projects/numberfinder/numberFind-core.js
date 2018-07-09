'use strict';

let userGuess
let computerNumber
let guessCounter = 0

function gameStart() {
    computerCreate();
}

function computerCreate() {
    computerNumber = Math.floor(Math.random() * 99 + 1)
    userInput()
}

function handleInput(item) {
    userGuess = item.toString().trim();
    guessCounter += 1;
    analyzeGuess();
}

function analyzeGuess() {
    if (userGuess == computerNumber){
        display("You guessed it! It took you " + guessCounter + " guesses!" )
        if(usingJava == true){
            exit()
        }
    }

    if (userGuess < computerNumber) {
        display("It is higher than " + userGuess)
        if(usingJava == true){
            userInput()
        }
    }

    if (userGuess > computerNumber) {
        display("It is lower than " + userGuess)
        if(usingJava == true){
            userInput()
        }
    }
 }

 module.exports = {
    handleInput: handleInput,
    gameStart: gameStart,
 }
