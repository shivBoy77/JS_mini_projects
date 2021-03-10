let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//--------------------STEP 1---------------------//
const generateTarget = () => Math.floor(Math.random() * 9);

// Testing the generateTarget function
// console.log(generateTarget());

//--------------------STEP 2---------------------//
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
}

// Testing compareGuesses function
// console.log(compareGuesses());

//--------------------STEP 3---------------------//
const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
};

//--------------------STEP 4---------------------//
// Next round 1,2,3,4..
const advanceRound = () => currentRoundNumber++;
