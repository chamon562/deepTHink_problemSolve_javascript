// creating a function that adds 2 numebrs
// need 2 parameters for num1 and num2 and inside the function make both numbers add

addNumbers = (num1, num2) => {
  return num1 + num2;
};

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
  return age * 12 * 30 * 24 * 60 * 60;
}
console.log(convertAgeToSeconds(25));

function ageInSeconds(age) {
  let oneMinToSeconds = 60;
  let oneHourtoSeconds = oneMinToSeconds * 60;
  let onedayToSeconds = oneHourtoSeconds * 24;
  let oneYearToSeconds = onedayToSeconds * 365;
  return age * oneYearToSeconds;
}

// console.log(ageInSeconds(35))
// console.log(ageInSeconds(25))

// first item in an array
const popping = ["hitting", "waving", "dime stop", "speed change", "animation"];

function returnFirstIndex() {
  let firstIndex = popping[0];
  return firstIndex;
}

console.log(returnFirstIndex());

function getFirstItem(items) {
  return items[0];
}
const creatures = ["rat", "bat", "fish"];
console.log(getFirstItem(creatures));

function addittion(a, b) {
  return a + b;
}

console.log(addittion(1, 1));

minToSecs = (min) => {
  return min * 60;
};

console.log(minToSecs(3));

const topFiveMovies = [
  "Forest Gump",
  "Ip Man",
  "A Moment To remember",
  "Roof Top Prince",
  "49 Days",
];

function loopTopFive() {
  for (let i = 0; i < topFiveMovies.length; i++) {
    //    console.log(topFiveMovies[i]);
    let results = topFiveMovies[i];
    // console.log(result);
  }
}
loopTopFive();

const numsArray = [10, 2, 1, 4, 5, 7];

function findMin() {
  // let minNum = numsArray.length;
  let minNum = numsArray[0];
  console.log(minNum);
  for (let i = 0; i < numsArray.length; i++) {
    // if (numsArray < minNum) {
    //     minNum = numsArray[i]
    // }
    // console.log(numsArray[i])
    // 2 < 0 index 2 making it false.
    // 1 < 0 index 2 making it true
    if (numsArray[i] < minNum) {
      // so minNum when true will = numsArray[i] printing out the 1
      minNum = numsArray[i]; // 1
    }
  }
  return minNum;
}
console.log("line 132:", findMin()); // 1

let findMinimum = (numbers) => {
  let minimum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  return minimum;
};

console.log(findMinimum([11, 12, 20, 33, 4, 2, 8]));

let findMax = (numbers) => {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

console.log(findMax([11, 12, 20, 33, 4, 2, 8]));

const newNumbers = [2, 3, 5, 6, 1, 0.32, 0.2, 0.003];

let findSmallestNumber = () => {
  let firstIndex = newNumbers[0];
  for (let i = 0; i < newNumbers.length; i++) {
    if (newNumbers[i] < firstIndex) {
      firstIndex = newNumbers[i]; // 2 < 2 flase, 3 < 2 false, 5 < 2 false, 6 < 2 false, 1 < 2 true, 0.32 < 2 true
      console.log(firstIndex);
    }
  }
  return firstIndex;
};

console.log(findSmallestNumber() + " is the smallest number in the array ");

let findMaximum = () => {
  let indexZero = newNumbers[0];
  for (let i = 0; i < newNumbers.length; i++) {
    if (newNumbers[i] > indexZero) {
      indexZero = newNumbers[i]; // 3, 5, 6
      console.log("line 182 of finxmaximum function: ", indexZero);
    }
  }
  return indexZero;
};
console.log(findMaximum() + " is the greatest number in the array "); // 6

// Sorting by Biggest numbers challenge 9
function bestRatingsFirst(numbers) {
  // take in a list of numbers then sort them || sort() is a helper function in javascript
  // learning to sort without helper function
  // start at first number and loop
  // first find max and max will give us the highest number
  // and what to swap 15 with 3
  // start loop at index1
  // find max from remaining list
  // find new max And know its location.

  // outter loop and set another variable as j
  // dont want to loop over constantly so want to stop by adding -1
  // want this loop to start off where j is currently at made it let i = j in inner loop
  // j is going to be moving
  for (let j = 0; j < numbers.length - 1; j++) {
    //this code is to find the max
    let maxNum = numbers[j];
    let maxLocation = j;
    // this is the inner loop now need the outer loop\
    // this for loop runs once we need to find the max multiple times
    // need to write a loop thats on the outside
    // inner loop constanly finds max
    for (let i = j; i < numbers.length; i++) {
      if (numbers[i] > maxNum) {
        maxNum = numbers[i];
        // this is to tell what location is max at
        maxLocation = i;
        console.log(maxLocation);
      }
    }
    // after that logic runs up top for max then swap the first and the last
    // once given access to that index then can change it
    // this is where the swap is taking place, swap the first and the last
    // changed numbers[0] to numbers[j] because that will be main iterator
    numbers[maxLocation] = numbers[j]; // -->23
    // swapping places with the first index to equal the maxNum because of the if logic that gets the max
    numbers[j] = maxNum;
  }
  // return [maxNum, maxLocation, numbers];
  return numbers;
}
console.log(
  "line 217 bestRatingFirst function:",
  bestRatingsFirst([3, 4, 5, 0, 2, 7, 11, 23, 15])
);
console.log(
  "line 217 bestRatingFirst function:",
  bestRatingsFirst([2, 4, 6, 1])
);

// console.log(bestRatingsFirst([3, 4, 5, 0, 2, 4, 11, 23, 15]));

let sortHighestFirst = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let maxNumber = numbers[i];
    let maxLocate = i;
    console.log("the value in that index:", maxNumber);
    console.log("i is the index:", maxLocate);
    for (let j = i; j < numbers.length; j++) {
      console.log("2nd loop numbers[j]:", numbers[j]);
      if (numbers[j] > maxNumber) {
        maxNumber = numbers[j];
        maxLocate = j;
        console.log(
          "2nd for loop with j maxNumber = to numbers[j]:",
          maxNumber
        );
        console.log("2nd forloop maxLocate = j:", maxLocate);
      }
    }
    numbers[maxLocate] = numbers[i];
    console.log("Line 263:", numbers);
    numbers[i] = maxNumber;
    console.log("Line 265: numbers[i] = maxNumber:", numbers);
  }
  return numbers;
};

console.log(sortHighestFirst([2, 1, 5, 3, 6, 8, 10]));
// i is the index: 0
// app.js:254 2nd loop numbers[j]: 2
// app.js:254 2nd loop numbers[j]: 1
// app.js:254 2nd loop numbers[j]: 5
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 5
// app.js:259 2nd forloop maxLocate = j: 2
// app.js:254 2nd loop numbers[j]: 3
// app.js:254 2nd loop numbers[j]: 6
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 6
// app.js:259 2nd forloop maxLocate = j: 4
// app.js:254 2nd loop numbers[j]: 8
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 8
// app.js:259 2nd forloop maxLocate = j: 5
// app.js:254 2nd loop numbers[j]: 10
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 10
// app.js:259 2nd forloop maxLocate = j: 6
// app.js:263 Line 263: (7) [2, 1, 5, 3, 6, 8, 2]
// app.js:265 Line 265: numbers[i] = maxNumber: (7) [10, 1, 5, 3, 6, 8, 2]
// app.js:251 the value in that index: 1
// app.js:252 i is the index: 1
// app.js:254 2nd loop numbers[j]: 1
// app.js:254 2nd loop numbers[j]: 5
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 5
// app.js:259 2nd forloop maxLocate = j: 2
// app.js:254 2nd loop numbers[j]: 3
// app.js:254 2nd loop numbers[j]: 6
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 6
// app.js:259 2nd forloop maxLocate = j: 4
// app.js:254 2nd loop numbers[j]: 8
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 8
// app.js:259 2nd forloop maxLocate = j: 5
// app.js:254 2nd loop numbers[j]: 2
// app.js:263 Line 263: (7) [10, 1, 5, 3, 6, 1, 2]
// app.js:265 Line 265: numbers[i] = maxNumber: (7) [10, 8, 5, 3, 6, 1, 2]
// app.js:251 the value in that index: 5
// app.js:252 i is the index: 2
// app.js:254 2nd loop numbers[j]: 5
// app.js:254 2nd loop numbers[j]: 3
// app.js:254 2nd loop numbers[j]: 6
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 6
// app.js:259 2nd forloop maxLocate = j: 4
// app.js:254 2nd loop numbers[j]: 1
// app.js:254 2nd loop numbers[j]: 2
// app.js:263 Line 263: (7) [10, 8, 5, 3, 5, 1, 2]
// app.js:265 Line 265: numbers[i] = maxNumber: (7) [10, 8, 6, 3, 5, 1, 2]
// app.js:251 the value in that index: 3
// app.js:252 i is the index: 3
// app.js:254 2nd loop numbers[j]: 3
// app.js:254 2nd loop numbers[j]: 5
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 5
// app.js:259 2nd forloop maxLocate = j: 4
// app.js:254 2nd loop numbers[j]: 1
// app.js:254 2nd loop numbers[j]: 2
// app.js:263 Line 263: (7) [10, 8, 6, 3, 3, 1, 2]
// app.js:265 Line 265: numbers[i] = maxNumber: (7) [10, 8, 6, 5, 3, 1, 2]
// app.js:251 the value in that index: 3
// app.js:252 i is the index: 4
// app.js:254 2nd loop numbers[j]: 3
// app.js:254 2nd loop numbers[j]: 1
// app.js:254 2nd loop numbers[j]: 2
// app.js:263 Line 263: (7) [10, 8, 6, 5, 3, 1, 2]
// app.js:265 Line 265: numbers[i] = maxNumber: (7) [10, 8, 6, 5, 3, 1, 2]
// app.js:251 the value in that index: 1
// app.js:252 i is the index: 5
// app.js:254 2nd loop numbers[j]: 1
// app.js:254 2nd loop numbers[j]: 2
// app.js:258 2nd for loop with j maxNumber = to numbers[j]: 2
// app.js:259 2nd forloop maxLocate = j: 6
// app.js:263 Line 263: (7) [10, 8, 6, 5, 3, 1, 1]
// app.js:265 Line 265: numbers[i] = maxNumber: (7) [10, 8, 6, 5, 3, 2, 1]
// app.js:270 (7) [10, 8, 6, 5, 3, 2, 1]

function sortBiggest(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let maxNumb = numbers[i];
    let maxLocater = i;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] > maxNumb) {
        maxNumb = numbers[j];
        maxLocater = j;
      }
    }
    numbers[maxLocater] = numbers[i];
    numbers[i] = maxNumb;
  }
  return numbers;
}
function sortSmallest(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let maxNumb = numbers[i];
    let maxLocater = i;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] < maxNumb) {
        maxNumb = numbers[j];
        maxLocater = j;
      }
    }
    numbers[maxLocater] = numbers[i];
    numbers[i] = maxNumb;
  }
  return numbers;
}

console.log(sortBiggest([3, 4, 5, 1, 22, 55, 67, 100, 9, 120, 30]));
console.log(sortSmallest("test", [3, 4, 5, 1, 22, 55, 67, 100, 9, 120, 30]));

const sort = (numbers) => {
  // for (let i = 0; i < numbers.length; i++){ // will make output all 88
  for (let i = 0; i < numbers.length - 1; i++) {
    let maxyNum = numbers[i];
    let location = i;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] > maxyNum) {
        maxyNum = numbers[j];
        location = j;
      }
    }
    numbers[location] = numbers[i];
    numbers[i] = maxyNum;
  }
  return numbers;
};

console.log(sort([3, 6, 2, 10, 2, 4, 8, 88]));

// Challenge 10: how to use helper function
// DRY principle do not repeat yourself
// whenever using similar logic its a red flag
// going to abstract the inner for loop inside sortBestHelper funciton
function findMaxHelper(numbers, start) {
  let maximum = numbers[start];
  let maxLocation = start;
  for (let j = start; j < numbers.length; j++) {
    if (numbers[j] > maximum) {
      maximum = numbers[j];
      maxLocation = j;
    }
  }
  return { maxNumber: maximum, maxIndex: maxLocation }
}

console.log(findMaxHelper([5, 2, 9, 3, 7], 0))

function sortBestHelper(numbers) {
  // run as a many times as there are items
  for (let i = 0; i < numbers.length - 1; i++) {
    // let maxNum = numbers[i];
    // let maxLocation = i;
    // find max number and max location starting from i
    max = findMaxHelper(numbers, i);
    maxNum = max['maxNumber'];
    maxLocation = max['maxIndex']
    // for (let j = i; j < numbers.length; j++) {
    //   if (numbers[j] > maxNum) {
    //     maxNum = numbers[j];
    //     maxLocation = j;
    //   }
    // }
    // swap the first and max item in an array
    numbers[maxLocation] = numbers[i];
    numbers[i] = maxNum;
  }
  return numbers;
}

console.log(sortBestHelper([1, 4, 2, 100, 23, 31, 94, 22, 5]))

class Person {
  constructor(name, zodiac, meaning) {
    this.name = name;
    this.zodiac = zodiac;
    this.meaning = meaning
  }
}

const channee = new Person("channee", "Pisces", "Versatile")
console.log(channee)
console.log(channee.zodiac)
