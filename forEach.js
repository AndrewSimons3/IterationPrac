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







// //PROBLEM 2 ------ FOREACH COPY FIRST 2 CHARS
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let dayAbbreviations = [];

// days.forEach(day => {
//   const dayAbbreviation = day.slice(0, 2);
//   dayAbbreviations.push(dayAbbreviation);
// });

// console.log(dayAbbreviations)

// //ONE LINE SOLUTION

// days.forEach(day => dayAbbreviations.push(day.slice(0, 2)));







// //PROBLEM 3 ----- FOREACH TURN NUMBER STRINGS INTO FLOATS AND ADD THEM ALL
// const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
// let priceTotal = 0;

// stringPrices.forEach(stringPrice => {
//   const parsedPrice = parseFloat(stringPrice);
//   priceTotal += parsedPrice;
// });

// //TWO LINE SOLUTION
//   stringPrices.forEach(stringPrice => priceTotal +=
//     parseFloat(stringPrice));

// console.log(priceTotal);






// //PROBLEM 4 ----- add all letters to noel variable except for "L"
// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// let noel = [];

// alphabet.forEach(letter => {
//   if (letter !== 'L') {
//     noel.push(letter);
//   }
// });

// console.log(noel);




// //PROBLEM 5 - iterate over percentages and store all percentages over 50% in the array
// const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
// let upperRange = [];

// // upperRange should be: [67, 90, 82, 99]
// // Write your code below

// percentages.forEach(percentage => {
//   if (percentage > 50) {
//     upperRange.push(percentage)
//   }
// });

// console.log(upperRange);




// //PROBLEM 6 ------  iterate over the colors array and store the hex colors that start with the letter F (ex. #FF0000) in the array filteredColors.
// const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
// let filteredColors = [];

// // filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
// // Write your code below

// colors.forEach(color => {
//   if (color[1] === "F") {
//     filteredColors.push(color);
//   }
// });

// console.log(filteredColors);




// //PROBLEM 7 ----- capitalize all the strings in the months array and store them in the array capitalizedMonths.
// const months = ['january', 'february', 'march', 'april', 'may'];
// let capitalizedMonths = [];

// months.forEach(month => {
//   let cap = month.toUpperCase();
//   capitalizedMonths.push(cap);
// });

// // ONE LINE SOLUTION
// months.forEach(month => capitalizedMonths.push(month.toUpperCase()));

// console.log(capitalizedMonths);

