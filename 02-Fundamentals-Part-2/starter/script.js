// 'use strict';
// 
// // Coding challenge number 1... more or less accidentally did this in Fundamentals part 1 challenge lol...
// 
// ///////////////////////////////////////
// // Coding Challenge #2
// 
// /*
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// 
// GOOD LUCK 😀
// */
// 
// // 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 
// function calcTip(bill) {
// 	return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// }
// 
// console.log(calcTip(100))
// 
// // 2. And now let's use arrays! So create an array 'bills' containing TEST DATA: 125, 555 and 44.
// 
// let bills = [125, 555, 44];
// 
// // 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 
// let tips = [];
// 
// bills.forEach(bill => tips.push(bill));
// 
// // 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
// 
// let total = [];
// 
// bills.forEach(bill => total.push(bill += calcTip(bill)));
// 
// console.log(total);
// 
// ///////////////////////////////////////
// // Dot vs. Bracket Notation
// 
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };
// 
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
// 
// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// 
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

// Next one

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   calcAge: function() {
// 	  this.age = new Date().getFullYear() - this.birthYear;
// 	  return this.age;
//   }
// }
// 
// console.log(jonas.calcAge());
// 
// // Challenge: write a function to summarise the object: "Jonas is a 31 year old teacher with/without a drivers license."
// 
// jonas.createSummary = function() {
// 	this.summary = `${this.firstName} is a ${this.age} year old ${this.job} ${this.hasDriversLicense ? `with` : `without`} a drivers license.`
// 	return this.summary;
// }
// 
// console.log(jonas.createSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

let personA = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function() {
		this.BMI = this.mass / (this.height ** 2);
		return this.BMI;
	},
}

let personB = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function() {
		this.BMI = this.mass / (this.height ** 2);
		return this.BMI;
	},
}

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.

personA.calcBMI();
personB.calcBMI();


// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (personA.BMI > personB.BMI) {
	console.log(`${personA.fullName}'s BMI (${personA.BMI}) is higher than ${personB.fullName}'s BMI (${personB.BMI})!`)
} else if (personA.BMI < personB.BMI) {
	console.log(`${personB.fullName}'s BMI (${personB.BMI}) is higher than ${personA.fullName}'s BMI (${personA.BMI})!`)
} else {
	console.log(`Both ${personA.fullName} and ${personB.fullName} have the same BMI!`)
}

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// Pretty much already did this earlier...

// function calcTip(bill) {
// 	return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// }
// 
// console.log(calcTip(100))
// 
// // 2. And now let's use arrays! So create an array 'bills' containing TEST DATA: 125, 555 and 44.
// 
// let bills = [125, 555, 44];
// 
// // 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 
// let tips = [];
// 
// bills.forEach(bill => tips.push(bill));
// 
// // 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
// 
// let total = [];
// 
// bills.forEach(bill => total.push(bill += calcTip(bill)));
// 
// console.log(total);
