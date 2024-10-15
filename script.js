const country = "France";
let population = 4400000;
const continent = "Europe";
console.log({ country }, population, continent);

let isIsland = false;
let langage;
console.log(typeof isIsland, typeof langage);
langage = "Français";
console.log({ langage });

const num = 11;
//num = 12;

//population divisé en 2
let resultPopulation = population / 2;
console.log(population);
population++;
console.log(population);
let finlande = 6000000;
console.log(population > finlande);
console.log(
  country +
    " is in " +
    continent +
    "and its" +
    population +
    "million inhabitant speak" +
    langage
);
const description = `${country} is in ${continent} and its ${population} million people speak ${langage}`;
console.log({ description });

const ref = 33000000;
if (population > ref) {
  console.log(`la population de la ${country} est plus grande que la moyenne`);
} else {
  console.log(`La population du ${country} est de ${ref - population} en dessous
de la moyenne`);
}

let numNeighbours = Number(
  prompt("« Combien de pays frontaliers a votre pays?")
);
console.log({ numNeighbours });

if (numNeighbours === 1) {
  console.log("Un seul pays frontalier");
} else if (numNeighbours > 1) {
  console.log("Plus d'un pays");
} else {
  console.log("Pas de frontière");
}

if (isIsland === false && langage === "english" && population < 50000000) {
  console.log("country match");
} else {
  console.log("criteria not corresponding");
}
