'use strict';

// LECTURE: Values and Variables

// 1. Declare variables called 'country','continent 'and 'population' and assign their values according to your own country (population in millions)

const country = "Canada";
const continent = "North America"
let population = 38;
// 
// // 2. Log them to the console.
// 
// console.log(country);
// console.log(continent);
// console.log(population);
// 
// // LECTURE: Data Types
// 
// // 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet.
// 
const isIsland = false;
let language;
// 
// // 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console
// 
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// 
// // LECTURE: let, const and var
// 
// // 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// 

language = "English";

// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 
// // Reflected above.
// 
// // 3. Try to change one of the changed variables now, and observe what happens
// 
// // TypeError.
// 
// // LECTURE: Basic Operators
// 
// // 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 
// console.log(population / 2);
// 
// // 2. Increase the population of your country by 1 and log the result to the console
// 
// console.log(population + 1);
// 
// // 3. Finland has a population of 6 million. Does your country have more people than Finland?
// 
// console.log(population > 6);
// 
// // 4. The average population of a country is 33 million people. Does your country have less people than the average country?
// 
// console.log(population < 33);
// 
// // 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
// 
// let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
// 
// console.log(description) // sorry, francophone friends...
// 
// // LECTURE: Strings and Template Literals
// 
// // 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
// 
// // Literally how I did it!
// 
// // LECTURE: Taking Decisions: if / else Statements
// 
// // 1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
// 
// if (population > 33) {
// 	console.log(`${country}'s population is above average.`)
// } else {
// 	console.log(`${country}'s population is ${33 - population} million below average.`)
// }

// LECTURE: Type Conversion and Coercion

// 1. Predict the result of these 5 operations without executing them:
// '9' - '5' -> number 4, subtract operator converts left operand to a number.
// '19' - '13' + '17'; -> string '617'.
// '19' - '13' + 17; -> number 23.
// '123' < 57; -> false, 'less than' operator converts left operand to number.
// 5 + 6 + '4' + 9 - 4 - 2; 1143.

// 2. Execute the operations to check if you were right

// console.log('9' - '5'); // correct
// console.log('19' - '13' + '17'); // correct
// console.log('19' - '13' + 17); // correct
// console.log('123' < 57); // correct
// console.log(5 + 6 + '4' + 9 - 4 - 2); // correct

// LECTURE: Equality Operators: == vs. ===

// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');

// let numNeighbours = prompt("How many neighbours does your country have?");

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening? // The prompt returns a string. Therefore, when using a strict equality equality operator, the first clause returns as false and eventually the final clause is satisfied.
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1

// if (+numNeighbours === 1) {
// 	console.log(`Only one border!`);
// } else if (numNeighbours > 1) {
// 	console.log(`More than 1 border.`);
// } else {
// 	console.log(`No borders.`)
// }

// 8. Reflect on why we should use the === operator and type conversion in this situation

// For security purposes - if we use a non-sterilised string in our code, then the user could input code into our script themselves.

// LECTURE: Logical Operators

// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

// if (language === "English" && population < 50 && !isIsland) {
// 	console.log(`You should live in ${country} :)`)
// } else {
// 	console.log(`${country} does not meet your criteria :(`)
// }

// LECTURE: The switch statement

// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

/* switch (language) {
	case 'chinese' || 'mandarin': console.log('MOST number of native speakers!')
	break;
	
	case 'spanish': console.log('2nd place in number of native speakers')
	break;
	
	case 'english': console.log('3rd place')
	break;
	
	case 'hindi': console.log('Number 4')
	break;
	
	case 'arabic': console.log('2nd place in number of native speakers')
	break;
	
	default: console.log('Great language too :D')
} */

/* LECTURE: The Conditional (Ternary) Operator

1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!

2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original 

*/

// console.log(`${country}'s population is ${population > 33 ? 'above': 'below'} average.`)

// LECTURE: Functions

// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console 

const country1 = describeCountry('Canada', 38, 'Ottawa');
const country2 = describeCountry('England', 56, 'London');
const country3 = describeCountry('France', 67, 'Paris');

// console.log(country1, country2, country3);

// LECTURE: Function Declarations vs. Expressions

// 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

function percentageOfWorld1(population) {
	return population / 7900 * 100;
} 
// 
// // 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
// 
// const countryPopulationPercentage1 = percentageOfWorld1(38);
// const countryPopulationPercentage2 = percentageOfWorld1(56);
// const countryPopulationPercentage3 = percentageOfWorld1(67);
// 
// console.log(countryPopulationPercentage1, countryPopulationPercentage2, countryPopulationPercentage3);
// 
// // 4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
// 
// const percentageOfWorld2 = function(population) {
// 	return population / 7900 * 100;
// } 
// 
// const countryPopulationPercentage1B = percentageOfWorld2(38);
// const countryPopulationPercentage2B = percentageOfWorld2(56);
// const countryPopulationPercentage3B = percentageOfWorld2(67);
// 
// console.log(countryPopulationPercentage1B, countryPopulationPercentage2B, countryPopulationPercentage3B);

// LECTURE: Arrow Functions

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

// const percentageOfWorld3 = (population) => population / 7900 * 100;

// LECTURE: Functions Calling Other Functions

// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

function describePopulation(country, population) {
	return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`
}

// 3. Call 'describePopulation' with data for 3 countries of your choice

describePopulation('Canada', 38);
describePopulation('England', 56);
describePopulation('France', 67);

// LECTURE: Introduction to Arrays

// 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'

let populations = [28, 56, 67, 102];

// 2. Log to the console whether the array has 4 elements or not (true or false)

console.log(populations.length === 4)

// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

let percentages = [
	percentageOfWorld1(populations[0]),
	percentageOfWorld1(populations[1]),
	percentageOfWorld1(populations[2]),
	percentageOfWorld1(populations[3]),
  ]
  
// LECTURE: Basic Array Operations (Methods)

//   1. Create an array containing all the neighbouring countries of a country of your
//   choice. Choose a country which has at least 2 or 3 neighbours. Store the array
//   into a variable called 'neighbours'

const neighbours = ['Albania', 'North Macedonia', 'Bulgaria', 'Turkey'];

//   2. At some point, a new country called 'Utopia' is created in the neighbourhood of
//   your selected country. So add it to the end of the 'neighbours' array

neighbours.push('Utopia');

//   3. Unfortunately, after some time, the new country is dissolved. So remove it from
//   the end of the array

neighbours.pop();

//   4. If the 'neighbours' array does not include the country ‘Germany’, log to the
//   console: 'Probably not a central European country :D'

// if (!neighbours.includes('Germany')) {
// 	console.log(`Probably not a central European country :D`)
// }

//   5. Change the name of one of your neighbouring countries. To do that, find the
//   index of the country in the 'neighbours' array, and then use that index to
//   change the array at that index position. For example, you can search for
//   'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const indexPosition = neighbours.indexOf('North Macedonia');
neighbours[indexPosition] = 'South Macedonia';

// LECTURE: Introduction to Objects

// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

const myCountry = {
	country: 'Greece',
	capital: 'Athens',
	language: 'Greek',
	population: 10.72,
	neighbours: ['Albania', 'North Macedonia', 'Bulgaria', 'Turkey'],
}

// LECTURE: Dot vs. Bracket Notation

// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

// LECTURE: Object Methods

// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.

myCountry.describe = function() {
	const result = `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
	
	myCountry.description = result;
	console.log(result);
	return result;
}

// 2. Call the 'describe' method

myCountry.describe();

// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.


