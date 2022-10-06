'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = 'Some address',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// Lets say we want to deconstruct the openingHours object into 2 new objects: weekdays, and weekends.

const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

const newRestaurant = {
  foundedIn: 1998, // new key:value pair
  ...restaurant, // rememeber, the order doesn't matter with objects
  founder: `Francesco Totti`, // new key:value pair
};

// Using rest parameters to create a function that takes an abritrary amount of arguments.

const add = function (...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  console.log(sum);
  return sum;
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

// SPREAD, because on the RIGHT side of the operator (=):

// const arr = [1, 2, ...[3, 4]]; // 1, 2, 3, 4.

// REST, because on the left side of the operator (=):

// const [a, b, ...others] = [1, 2, 3, 4, 5];

// Using deconstruction to create variables and initialise them with values from an existing array. We use the spread operator to say "the rest of the elements, put them into an array called "others"

// console.log(others); // [3, 4, 5]

// An example of deconstructing an array using both the spread and rest operators:

const [pizza, , risotto, ...otherFood] = [
  // rest operator collects the rest of the values on the right hand side of the operator into a new array called otherFood
  ...restaurant.mainMenu, // spread operator breaks down this array
  ...restaurant.starterMenu, // ditto
];

console.log(pizza, risotto, otherFood);

// const ingredients = [
//   prompt('1st ingredient?'),
//   prompt('2nd ingredient?'),
//   prompt('3rd ingredient?'),
// ];
//
// restaurant.orderPasta(...ingredients);

// Spread operator

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];

// console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// Shallow copy of array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const combinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of combinedMenu.entries()) {
    console.log(`Menu item ${item[0] + 1}: ${item[1]}!`)
}

for (const [item, element] of combinedMenu.entries()) {
    console.log(`Menu item ${item + 1}: ${element}!`)
}

// Iterables: arrays, strings, maps, sets. NOT OBJECTS!!

const str = 'Samuel';
const letters = [...str];
// console.log(letters);
// console.log(...str);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: '123 Main Street',
//   mainIndex: 2,
//   starterIndex: 2,
// });
//
// restaurant.orderDelivery({
//   starterIndex: 3,
// });

// Destructuring an object - use curly braces. The variable names _have_ to be the same as the object keys that you're trying to access!
const { name, openingHours, categories } = restaurant;

// If we want variable names to be different from the property names, we have to assign them whilst destructuring:
const {
  name: restaurantName, // preferredVariableName = existingObjectKey;
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

// Bringing it all together, we may also want to assign default values at the same time:

/* Here, we assign:

  - variable "menu' with an empty array if restaurant object doesn't have a key called menu.
  - and the variable "starters" as the starterMenu key of restaurant, but if the starterMenu doesn't exist, we assign it with an empty array.
  
*/

const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters); // returns empty array for menu, and the starters.

// We can also mutate variables inside an object.

let a = 111;
let b = 999;

const object = { a: 23, b: 7, c: 14 };

// We want to change the values of a and b to be those of the respective key values in this object.

// {a, b} = object; // ❌ js thinks it's a codeblock.
({ a, b } = object); // ✅ a workaround.

// nested objects

const { fri } = restaurant.openingHours;

// console.log(fri); // returns object for fri.

const {
  fri: { open, close }, // notice the colon used here: this is the syntax used when finding values from nested objects
} = restaurant.openingHours;

// console.log(open, close);
