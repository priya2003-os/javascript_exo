// # Fundamentals - Part2 #3

// 🚀 À vos codes !

// Revenons à la comparaison des IMC de Mark et John !

// Cette fois-ci, utilisons des objets pour implémenter les calculs ! Rappelez-vous : IMC = masse / (taille \* taille) (masse en kg et taille en mètres).

// Vos tâches :

// 1. Pour chacun d'eux, créez un objet avec des propriétés pour leur nom complet, leur masse et leur taille (Mark Miller et John Smith). Nommez ces objets "mark" et "john", et leurs propriétés exactement "fullName", "mass" et "height".

// 2. Créez une méthode "calcBMI" sur chaque objet pour calculer l'IMC (la même méthode sur les deux objets). Attribuez la valeur de l'IMC à une propriété, et renvoyez-la également depuis la méthode.

// 3. Affichez dans la console qui a le plus grand IMC, avec le nom complet et l'IMC respectif. Exemple : "L'IMC de John Smith (28,3) est supérieur à celui de Mark Miller (23,9) !".

// # DONNÉES DE TEST :

// Mark pèse 78 kg et mesure 1,69 m de haut. John pèse 92 kg et mesure 1,95 m de haut.

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "john",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

console.log(mark.calcBMI());
console.log(mark.bmi);

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `l'IMC de ${mark.firstName} ${
      mark.lastName
    } (${mark.calcBMI()}) est supérieur à celui de ${john.firstName} ${
      john.lastName
    } (${john.calcBMI()})`
  );
} else {
  console.log(
    `l'IMC de ${john.firstName} ${
      john.lastName
    } (${john.calcBMI()}) est supérieur à celui de ${mark.firstName} ${
      mark.lastName
    } (${mark.calcBMI()})`
  );
}
