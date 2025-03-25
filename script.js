"use strict";
/*Exercices sur les méthodes filter, map et find*/
// Exercices avec filter
// 1. Nombres pairs :
const fullNumbers = [2, 5, 8, 10, 11, 13, 22, 33];
const onlyEven = fullNumbers.filter((f) => (f % 2 === 0));
console.log(onlyEven);

// 2. Mots longs :
const animals = ["cat", "dog", "humster", "bird", "panda"];
const moreThanFive = animals.filter((a) => (a.length >= 5));
console.log(moreThanFive);

// 3. Personnes majeures :
const profils = [
  { firstname: "miyuki", age: 32 },
  { firstname: "lena", age: 21 },
  { firstname: "lina", age: 5 },
];
const onlyMajor = profils.filter((p) => (p.age >= 18));
console.log(onlyMajor);

// Exercices avec map
// 1. Doubler les nombres :
const double = fullNumbers.map((f) => (f * 2));
console.log(double);

// 2. Longueur des mots :
const wordsLength = animals.map((a) => (a.length));
console.log(wordsLength);

// 3.  Convertir des températures :
const celsius = [18, 24, 36, 5, -2];
const fahrenheit = celsius.map((c) => ((c * 9 / 5) + 32));
console.log(fahrenheit);

// Exercices combinant filter et map
// 1. Nombres pairs doublés :
const doubleEven = onlyEven.map((even) => even * 2);
console.log(doubleEven);

// 2. Mots longs en majuscules :
const upperCaseWords = moreThanFive.map((n) => (n.toUpperCase()));
console.log(upperCaseWords);

// 3. Personnes majeures avec salutation :
const greetings = onlyMajor.map((p) => `Bonjour, ${p.firstname}`);
console.log(greetings);

// Exercices avec find
// 1. Trouver un nombre spécifique :
const moduloFive = fullNumbers.find((f) => (f % 5 === 0));
console.log(moduloFive);

// 2.  Trouver un mot spécifique :
const wordStartD = animals.find((a) => (a.startsWith("d")));
console.log(wordStartD);

// 3.  Trouver une personne par nom :
const findLina = profils.find((p) => (p.firstname === "lina"));
console.log(findLina);

// 4.  Trouver un produit en stock :
const stock = [
  { productName: "stylo", quantity: 0 },
  { productName: "colle", quantity: 5 },
  { productName: "gomme", quantity: 3 },
];
const inStock = stock.find((p) => (p.quantity > 0));
console.log(inStock);
