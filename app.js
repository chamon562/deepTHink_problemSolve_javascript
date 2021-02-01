// creating a function that adds 2 numebrs
// need 2 parameters for num1 and num2 and inside the function make both numbers add

addNumbers = (num1, num2) => {
    return num1 + num2;
}

let addAnswer = addNumbers(2, 3);
// console.log(addAnswer) //blue 5
let turnString = addAnswer.toString();
// if the number is black its a string using black 5
// console.log("this is turning into string with toString", turnString);
function add(num1, num2) {
    return num1 + num2;
}
// if the number is blue, its a number
// console.log(add(1, 3))
// console.log(add(5, 3))
// console.log(add(9, 3))
// console.log(add(10, 3))

// Converting minutes to seconds.
// lets say 1 minute. and it equeals 60 seconds. 
// make function that converts minutes to seconds
// takes in minutes 

function minToSeconds(minutes) {
    return minutes * 60;
}
// let minInSeconds = minToSeconds(1);
// console.log(minInSeconds);
// console.log(`1 minute converted into seconds is: ${minToSeconds(1)}`)
// console.log(minToSeconds(3));

// Change age in to seconds
// how many seconds in 1 year 
// how many seconds in 1 day 
// 24 hours in a day
// 1 hour is 60 minutes
// 1 minute is 60 seconds

// age in seconds 
/*years
*months(12)
*days(30) 
*hours(24)
*minutes(60)
*seconds(60)
= age in seconds
*/
function convertAgeToSeconds(age) {
    // age in seconds 
    /*years
    *months(12)
    *days(30) 
    *hours(24)
    *minutes(60)
    *seconds(60)
    = age in seconds
    */
    return age * 12 * 30 * 24 * 60 * 60
}
console.log(convertAgeToSeconds(25))

function ageInSeconds(age) {
    let oneMinToSeconds = 60
    let oneHourtoSeconds = oneMinToSeconds * 60
    let onedayToSeconds = oneHourtoSeconds * 24
    let oneYearToSeconds = onedayToSeconds * 365
    return age * oneYearToSeconds
}

// console.log(ageInSeconds(35))
// console.log(ageInSeconds(25))

// first item in an array
const popping = ["hitting", "waving", "dime stop", "speed change", "animation"]

function returnFirstIndex(){
    let firstIndex = popping[0]
    return firstIndex;
}

console.log(returnFirstIndex());

function getFirstItem(items){
    return items[0]
    
}
const creatures = ["rat", "bat", "fish"]
console.log(getFirstItem(creatures))