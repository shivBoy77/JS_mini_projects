const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput == 'paper' || userInput === 'scissorss') {
        return userInput;
    } else {
        console.log("Invalid input!");
    }
};

// console.log(getUserChoice('paper'))