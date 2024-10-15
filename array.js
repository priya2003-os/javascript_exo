const populations = [10, 30, 60, 70];
console.log(populations.length === 4);
if (populations.length === 4) {
  console.log("vrai");
} else {
  console.log("faux");
}
function percentageOfWorld1(population2) {
  return (population2 / 7900) * 100;
}

const pourcentage = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(pourcentage);

let neighbours = ["belgique", "suisse", "espagne"];
neighbours.push("utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

const include = neighbours.indexOf("germany");
//if(!neighbours.include(germany))
if (neighbours.indexOf("germany") === -1) {
  console.log("Probably not a central European country :D");
}

// const changeCountry = ;
neighbours[neighbours.indexOf("espagne")] = "italie";
console.log("------->", neighbours);
