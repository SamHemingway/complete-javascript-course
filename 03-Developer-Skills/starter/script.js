// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

	// - What is temperature amplitude? Difference between the highest and lowest temperatures.
	// - How to compute the max and min temperatures?
	// - What does a sensor error look like? And what to do? It is 'error', ignore it.

// 2) Breaking into smaller problems

	// - How to ignore errors? Either remove sensor errors from the array, or process all items whilst filtering out errors. This can be done by checking the data type and ensuring it is a number, not a string.
	// - Find max value in the array.
	// - Find min value in the array.
	// - return max - min.
	
function calcTempAmplitude(array) {
	
	// - How to ignore errors? Either remove sensor errors from the array, or process all items whilst filtering out errors. This can be done by checking the data type and ensuring it is a number, not a string.
	
	const sanitisedArray = [];
	
	array.forEach(item => {
		if(Number.isInteger(item)) {
			sanitisedArray.push(item);	
		}});
			
	// - Find max value in the array.

	const max = Math.max(...sanitisedArray);
	
	// - Find min value in the array.

	const min = Math.min(...sanitisedArray);
	
	// - return max - min.
	
	return max - min;
	
}  

// console.log(calcTempAmplitude(temperatures))

/* Resources used:
	- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
	- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
	- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
*/

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem

	// - With 2 arrays, implement same functionality twice? No, just merge two arrays.
	
const temperatures2 = [3, -2, -9, -1, 'error', 9, 13, 25, 15, 14, 9, 5];

function calcTempAmplitude2(array1, array2) {
	
	// - How to ignore errors? Either remove sensor errors from the array, or process all items whilst filtering out errors. This can be done by checking the data type and ensuring it is a number, not a string.
	
	const sanitisedArray = [];
	
		array1.forEach(item => {
		if(Number.isInteger(item)) {
			sanitisedArray.push(item);	
		}});
		
		array2.forEach(item => {
		if(Number.isInteger(item)) {
			sanitisedArray.push(item);	
		}});
			
	// - Find max value in the array.

	const max = Math.max(...sanitisedArray);
	
	// - Find min value in the array.

	const min = Math.min(...sanitisedArray);
	
	// - return max - min.
	
	return max - min;
	
}  

// console.log(calcTempAmplitude2(temperatures, temperatures2))


// Alternative I considered: merging the two arrays as step 1, then simply passing the new array into the previously constructed function. I wish I'd done this the first time... much less effort.

/* function mergeTwoArrays(array1, array2) {
	return [...array1, ...array2];
}

const mergedArrays = mergeTwoArrays(temperatures, temperatures2);

console.log(calcTempAmplitude(mergedArrays)); */

function measureKelvin() {
	
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		
		//C: Fix the bug.
		
		// value: +prompt("Please provide a temperature in centigrade.", 0),
		value: 10,
	}
	
	// B: Find the bug — yup, it's a string.
	
	// console.table(measurement);

	const kelvin = measurement.value + 273;
	return kelvin 	
}

// A: Identify bug (already know it's because prompt returns a string, not a number)

// console.log(measureKelvin());

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Understand the problem: create a function that produces a string from the inputted array.

// Break into sub-problems

function printForecast(arr) {
	
	// 	1. Create a result variable.
	
	let result = "... ";
	
	// 	2. Iterate over each element in the array.
	
	arr.forEach((temperature, index) => {
		
		// 	3. Add the temperature to the string
		
		result += `${temperature}ºC in ${index + 1} days ... `
	})
	
	// 	3. Return the string.

	console.log(result);
	return result;

}

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

printForecast(testData1)
printForecast(testData2)