////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// Test Data 1

let markMass1 = 78;
let markHeight1 = 1.69;

let JohnMass1 = 92;
let JohnHeight1 = 1.95;

function calculateBMI(mass, height) {
	let calculation = mass / height ** 2;
	
	return calculation.toFixed(2);
}

const markBMI = calculateBMI(markMass1, markHeight1);
const johnBMI = calculateBMI(JohnMass1, JohnHeight1);

let markHigherBMI = markBMI > johnBMI; 
// console.log(markHigherBMI);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// 
// 	if (markHigherBMI) {
// 		console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// 	} else {
// 		console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// 	}
// 	

////////////////////////////////////
	// Coding Challenge #3
	
	/*
	There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
	
	GOOD LUCK 😀
	*/
	
// Round 1
// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// 	1. Calculate the average score for each team, using the test data below

const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

function calculateArrayMean(array) {
	
	let sum = 0;
	
	array.forEach(value => sum += value)
	
	const mean = (sum /= array.length);
	
	return mean;
}

let averageDolphinsScores1 = Math.floor(calculateArrayMean(dolphinsScores1));
let averageKoalasScores1 = Math.floor(calculateArrayMean(koalasScores1));

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// if (averageDolphinsScores1 > averageKoalasScores1) {
// 	console.log(`Round 1 result: the Dolphins win! The Dolphins scored ${averageDolphinsScores1} on average. The Koalas scored ${averageKoalasScores1} on average.`);
// } else if (averageDolphinsScores1 < averageKoalasScores1) {
// 	console.log(`Round 1 result: the Koalas win! The Dolphins scored ${averageDolphinsScores1} on average. The Koalas scored ${averageKoalasScores1} on average.`);
// } else {
// 	console.log(`Round 1 result: it's a draw! Both teams scored ${averageDolphinsScores1}`);
// }

// 	3. Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.

// Round 2
// TEST DATA 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

function calculateArrayMeanMin100(array) {
	
	let sum = 0;
	
	array.forEach(value => {
		if (value >= 100) {
			sum += value;
		}
	})
	
	const mean = (sum /= array.length);
	
	return mean;
}

const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

let averageDolphinsScores2 = Math.floor(calculateArrayMeanMin100(dolphinsScores2));
let averageKoalasScores2 = Math.floor(calculateArrayMeanMin100(koalasScores2));

// if (averageDolphinsScores2 > averageKoalasScores2) {
// 	console.log(`Round 2 result: the Dolphins win! The Dolphins scored ${averageDolphinsScores2} on average. The Koalas scored ${averageKoalasScores2} on average.`);
// } else if (averageDolphinsScores2 < averageKoalasScores2) {
// 	console.log(`Round 2 result: the Koalas win! The Dolphins scored ${averageDolphinsScores2} on average. The Koalas scored ${averageKoalasScores2} on average.`);
// } else {
// 	console.log(`Round 2 result: it's a draw! Both teams scored ${averageDolphinsScores2}`);
// }

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

TEST DATA: Test for bill values 275, 40 and 430

GOOD LUCK 😀
*/

// 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

const bill = 430;

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// 
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);






