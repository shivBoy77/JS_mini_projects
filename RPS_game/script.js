const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput == 'paper' || userInput === 'scissors' || userInput === 'bomb') {
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
    } else if (userChoice == 'bomb') {
        return "Wow You got all the screts Congratulations!! on your victory!"
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return "You Won the game!";
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return "You Won the game!";
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return "You Won the game!";
    } else {
        return "Computer Won the game!";
    }
};

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};



playGame()


