const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput == 'paper' || userInput === 'scissorss') {
        return userInput;
    } else {
        console.log("Invalid input!");
    }
};


const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
    }
};


// ''' we know that r > s, s > p, p > r'''
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game is a Tie";
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return "User Won the game!"
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return "User Won the game!"
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return "User Won the game!"
    } else {
        return "Computer Won the game!"
    }
};