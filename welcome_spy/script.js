var firstName = prompt("First Name Please: ")
var lastName = prompt("Last Name Please: ")
var age = prompt("how old are you: ")
var height = prompt("YOur height: ")
var petName = prompt("What is your pet Name: ")
alert("Thank you for you Info.")

var nameCondition = null;
var ageCondition = null;
var heightCondition = null;
var petCondition = null;

if (firstName[0] == lastName[0]) {
    nameCondition = true;
} else {
    nameCondition = false;
}
if (age > 20 && age < 30) {
    ageCondition = true;
} else {
    ageCondition = false;
}
if (height >= 176) {
    heightCondition = true;
} else {
    heightCondition = false;
}

if (petName[petName.length - 1] === "y") {
    petCondition = true;
} else {
    petCondition = false;
}

if (nameCondition && ageCondition && heightCondition && petCondition) {
    console.log("Welcome spy!");
} else {
    console.log("hey very sorry please try agian.");
}
