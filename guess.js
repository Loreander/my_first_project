/*Start of Game and Defining Function*/
console.log ("The game has begun!\nThink of a number between 0-100")
    function getRndInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

/* Defining Variables */
let computerguess = undefined
let k = 0
let computerlow = 1
let computerhigh = 100 
let userresponse = ''

computerGuess()

/* Computer takes a guess */
function computerGuess(){
    computerguess = getRndInt(computerlow, computerhigh)
    console.log ("Is it " + computerguess + "?")
    getUserResponse()
}

/* Trying to get user response */
function getUserResponse(){
    process.stdin.once('data', (chunk) => {
    userresponse = chunk.toString().trim();
    verifyUserResponse()
});
}

/* Verifying higher or lower */
function verifyUserResponse(){
    if (userresponse === "h") {
    computerlow = computerguess + 1
    console.log ("higher...")
    computerGuess()
    }

    if (userresponse === "l") {
    computerhigh = computerguess - 1
    console.log ("lower...")
    computerGuess()
    }

    if (userresponse === "y") {
    console.log ("YOU WIN!!!")
    process.exit()
    }
}


    





