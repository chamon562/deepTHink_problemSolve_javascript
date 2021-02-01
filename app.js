// creating a function that adds 2 numebrs
// need 2 parameters for num1 and num2 and inside the function make both numbers add

addNumbers = (num1, num2) =>{
   return num1 + num2
}

let addAnswer = addNumbers(2, 3);
// console.log(addAnswer) //blue 5
let turnString = addAnswer.toString();
// if the number is black its a string using black 5
// console.log("this is turning into string with toString", turnString);
function add(num1, num2){
    return num1 + num2 
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

function minToSeconds(minutes){
    return minutes * 60 ;
}
let minInSeconds = minToSeconds(1);
console.log(minInSeconds);
console.log(`1 minute converted into seconds is: ${minToSeconds(1)}`)
console.log(minToSeconds(3));