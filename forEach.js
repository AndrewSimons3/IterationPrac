// const fruits = ["apple", "pear", "cherry"];


//for loop iteration
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// //forEach iteration
// fruits.forEach(function(fruit) {
//   console.log(fruit);
// })

// //forEach one line
// fruits.forEach(fruit => console.log(fruit));




//capitalize with forEach
// let capitalizedFruits = [];
// fruits.forEach(fruit => {
//   let capitalizedFruit = fruit.toUpperCase();
//   capitalizedFruits.push(capitalizedFruit);
// });

// console.log(capitalizedFruits);




// const prices = [6.75, 3.10, 4.00, 8.12]; //total 21.97

// let total = 0;
// prices.forEach(price => {
//   total += price;
// })

// console.log(total);




// //Numbering each name index
// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
// let sNames = [];

// names.forEach((theirName, index) => console.log(`${index + 1}) ${theirName}`));


// //PROBLEM 1 FOREACH to add numbers array
// const numbers = [1,2,3,4,5];
// let total = 0;

// numbers.forEach(number => total += number);

// console.log(total)



//PROBLEM 2 FOREACH COPY FIRST 2 CHARS
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

days.forEach(day => {
  const dayAbbreviation = day.slice(0, 2);
  dayAbbreviations.push(dayAbbreviation);
});

console.log(dayAbbreviations)

//ONE LINE SOLUTION

days.forEach(day => dayAbbreviations.push(day.slice(0, 2)));

