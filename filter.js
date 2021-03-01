// //EVEN NUMBER FILTER
// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const evenNumbers = numbers.filter(number => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// //ONE LINE SOLUTION
// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers)



// const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
// // century20 should be: [1989, 2000, 1999, 1973]
// // Write your code below
// century20 = years.filter(year => year <= 2000);
// console.log(century20)



// const strings = ['1','2','3','4','5'];
// let numbers = strings.map(string => parseInt(string, 10));
// console.log(numbers);



// const fruits = ['apple', 'pear', 'cherry'];
// const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log(capitalizedFruits);



// const prices = [5, 4.23, 6.4, 8.09, 3.20];
// const priceToDollars = price => `$${price.toFixed(2)}`
// const stringPrice = prices.map(priceToDollars);
// console.log(stringPrice)


// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let abbreviatedDays;
// // abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// // Write your code below
// abbreviatedDays = daysOfWeek.map(days => days.slice(0, 3));
// console.log(abbreviatedDays);


// const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97
// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total);

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const gNames = names.reduce((count, name) => {
  if (name[0] === "G") {
    return count + 1;
  }
  return count;
}, 0);

console.log(gNames)