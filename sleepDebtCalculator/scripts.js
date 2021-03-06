const getSleepHours = (day) => {
    switch (day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 5
            break;
        case 'Wednesday':
            return 3
            break;
        case 'thursday':
            return 5
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 4
            break;
        case 'sunday':
            return 9
            break;
        default:
            return "Error!"
    }
}

const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');