const language = "chinese";

switch (language) {
  case "chinese":
    console.log(" MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D ");
    break;
}

const population = 44;

population > 33
  ? console.log("Portugal’s population is above average")
  : console.log("Portugal’s population is above below");
console.log(
  `Portugals population is ${population > 33 ? "above" : "below"} average`
);
