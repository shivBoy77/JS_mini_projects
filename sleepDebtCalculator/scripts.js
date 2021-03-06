const getSleepHours = (day) => {
    switch (day) {
        case 'Monday':
            return 8
            break;
        case 'Tuesday':
            return 5
            break;
        case 'Wednesday':
            return 3
            break;
        case 'Thursday':
            return 5
            break;
        case 'Friday':
            return 8
            break;
        case 'Saturday':
            return 4
            break;
        case 'Sunday':
            return 9
            break;
        default:
            return "Error!"
    }
};

const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');



const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};


const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('User got ' + (idealSleepHours) + '\'hour(s) sleep which is perfect amount of sleep! 😴😍');
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log('User got ' + (idealSleepHours) + '\'hour(s) more sleep which is more sleep than usual. SLEEP LESS 😠😒');
    }
    else if (idealSleepHours > actualSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + '\'hour(s) less sleep than you needed this week. Get some rest. 😪🥱');
    }
    else {
        console.log('Something went Wrong!')
    }
};

calculateSleepDebt()