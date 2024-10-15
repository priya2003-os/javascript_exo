const myCountry = {
  country: "France",
  capital: "Paris",
  langage: "french",
  population: 65,
  neighbours: ["Espagne", "Belgique", "Suisse"],
};

// Finland has 6 million
// finnish-speaking people, 3 neighbouring countries and a
// capital called Helsinki » (La Finlande compte 6 millions de
// finnophones, 3 pays voisins et une capitale appelée
// Helsinki

const string = `${myCountry.country} has ${myCountry.population} million
${myCountry.langage} speaking people, ${myCountry.neighbours.length} neighbouring countries and a
capital called ${myCountry.capital} `;

// S//myCountry.population += 2
myCountry.population = myCountry.population + 2;
// console.log(myCountry.population);
myCountry["population"] = myCountry["population"] - 2;

const priya = {
  firstName: "priya",
  lastName: "Rama",
  birthYear: "1978",
  job: "webmaster",
  hasdrivingLicense: true,
  calcAge: function (currentYear) {
    this.age = currentYear - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge(2024)} old ${
      this.job
    }, and she ${
      this.hasdrivingLicense ? "has licence" : "has not driver licence"
    }`;
  },
};

// console.log(priya.calcAge(2024));
// console.log(priya.getSummary());

//Hedi is a 46 years old teacher, and he has a driver’s licence.

const myCountry2 = {
  country: "France",
  capital: "Paris",
  langage: "french",
  population: 65,
  neighbours: ["Espagne", "Belgique", "Suisse"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.langage} speaking people, ${this.neighbours.length} neighbouring countries and a
capital called ${this.capital}`;
  },
  checkIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};

console.log(myCountry2.checkIsland());
console.log(myCountry2);
