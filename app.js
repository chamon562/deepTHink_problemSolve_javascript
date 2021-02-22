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

function returnFirstIndex() {
    let firstIndex = popping[0]
    return firstIndex;
}

console.log(returnFirstIndex());

function getFirstItem(items) {
    return items[0]

}
const creatures = ["rat", "bat", "fish"]
console.log(getFirstItem(creatures))

function addittion(a, b) {
    return a + b;
}

console.log(addittion(1, 1));

minToSecs = (min) => {
    return min * 60;
}

console.log(minToSecs(3))

const topFiveMovies = ["Forest Gump", "Ip Man", "A Moment To remember", "Roof Top Prince", "49 Days"]

function loopTopFive() {
    for (let i = 0; i < topFiveMovies.length; i++) {
        //    console.log(topFiveMovies[i]);
        let results = topFiveMovies[i];
        // console.log(result);
    }
}
loopTopFive();

const numsArray = [2, 1, 4, 5, 7]

function findMin() {
    let minNum = numsArray[0]
    // console.log(minNum)
    for (let i = 0; i < numsArray.length; i++) {
        // if (numsArray < minNum) {
        //     minNum = numsArray[i]
        // }
        // console.log(numsArray[i])
        // 2 < 0 index 2 making it false. 
        // 1 < 0 index 2 making it true 
        if (numsArray[i] < minNum) {
            // so minNum when true will = numsArray[i] printing out the 1
            minNum = numsArray[i] // 1
        }
    }
    return minNum
}
console.log("line 132", findMin());// 1