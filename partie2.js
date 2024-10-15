"use strict";

function greet(username) {
  console.log(`Hello ${username}!`);
}
greet("thomas");
greet("charles");
greet("camille");

//------------------------------------------
const country = "Finland";
const capitalCity = "Helsinki";
const population = 6;

function describeCountry(country, capitalCity, population) {
  return `${country} has ${population} million people and its capital city is
${capitalCity}`;
}

let France = describeCountry("France", "Paris", 65);
let spain = describeCountry("spain", "Madrid", 30);
let china = describeCountry("china", "Pekin", 1100);
console.log({ France, spain, china });

//----------------------------------------------

const population2 = "";
/**
 * it returns pourcentage of the population
 * @param {Number} population2
 * @returns number
 */
function percentageOfWorld1(population2) {
  return (population2 / 7900) * 100;
}

const france = percentageOfWorld1(62);
console.log(france);

const percentageOfWorld2 = function (population2) {
  return (population / 7900) * 100;
};

const spain2 = percentageOfWorld2(47);
console.log(spain);
//----------------------------------------------
// console.log(`resultat: ${percentageOfWorld3(55)}`);

//--------------------------------------------
const describePopulation = (country, population) => {
  return `${country} has ${population} million people,
so it's about 18.2% of the world population.`;
};

const china2 = describePopulation("china", 1441);
console.log(china2);
