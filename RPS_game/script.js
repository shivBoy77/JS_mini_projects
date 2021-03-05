const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput == 'paper' || userInput === 'scissorss') {
        return userInput;
    } else {
        console.log("Invalid input!");
    }
};

// console.log(getUserChoice('paper'))


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