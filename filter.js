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



const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];


// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below

century20 = years.filter(year => year <= 2000);

console.log(century20)