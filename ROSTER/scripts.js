var roster = []
function addNew() {
    var newName = prompt("what name would yoy like to add?")
    roster.push(newName)
}
function remove() {
    var removeName = prompt("What name would you like to remvoe?")
    var index = roster.indexOf(removeName);
    roster.splice(index, 1)
}

function display() {
    console.log(roster);

}
var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty"

if (start == "y") {
    while (request !== "quit") {
        request = prompt("please select an action: add, remove, display, or quit. ")
        if (request == 'add') {
            addNew()
        } else if (request == 'display') {
            display()
        } else if (request == 'remove') {
            remove()
        } else {
            alert("Not recognized")
            // request = "quit"
        }
    }
}