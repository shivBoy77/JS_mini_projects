const howOld = (age, year) => {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();

    const yearDifference = year - thisYear
    // console.log(yearDifference)
    const newAge = age + yearDifference
    // console.log(newAge)


    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}

console.log(howOld(18, 2070))
