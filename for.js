for (let i = 1; i <= 50; i++) {
  //   console.log(`voter number ${i} is currently voting`);
}
const populations = [10, 30, 60, 70];
let pourcentage = [];

function percentageOfWorld1(population2) {
  return (population2 / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  //   console.log(percentageOfWorld1(populations[i]));
  pourcentage.push(percentageOfWorld1(populations[i]));
}

console.log(pourcentage);
