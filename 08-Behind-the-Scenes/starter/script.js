'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Rupert';
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);
    }

    console.log(millenial);
  }

  printAge();

  return age;
}

const firstName = 'Sam';

calcAge(1991);
