// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 
// input: number
// output: string indicating above, at or below boiling point
// process: create a function called boilingPoint that takes a number called temp
// if temp is below 212F it will return below boilingPoint
// if temp is equal to 212F it will return at boilingPoint
// if temp is above 212F it will return above boilingPoint

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (value1)=> {
    if(value1 < 212){
     return `${value1} is below boiling point`
   } else if(value1 > 212){
     return `${value1} is above boiling point`
   } else if (value1 == 212){
     return `${value1} is at boiling point`
   } 
}
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// input: arrays
// output: the length of the variables combined
// process: make a varible called myArray and find the length of the elements of the array using length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

var myArray = [2, 5, 2, 2, 4, 6, 3, 5, 3,]
console.log(myArray.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// input: string
// output: the varible in reverse
// process: make a string that will give an output of the varible in reverse

const currentCohort = "Hotel 2022"
// Expected output: "2202 letoH"

var currentCohortH = [`H`,`o`,`t`,`e`,`l`,`2`,`0`,`2`,`2`]
var cHotel = currentCohortH.reverse().join("")
console.log(cHotel)




// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// input: array
// output: a return value from the array
// process: create an array that returns the index of the given value.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

console.log(myNumbers.lastIndexOf(givenValue1))

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// input: array
// output: the numbers in the array sorted from largest to smallest.
// process: create a code that sorts the numbers in the array using given variables.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoSummerTemperatures.sort((a, b) => b - a)
console.log(sanDiegoSummerTemperatures)

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoWinterTemperatures.sort((a, b) => b - a)
console.log(sanDiegoWinterTemperatures)


