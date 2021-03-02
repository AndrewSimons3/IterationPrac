// const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
// let displayYears;

// // displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// // Write your code below

// displayYears = years
// .filter(year => year > 2000)
// .map(year  => year + "A.D.");






// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42},
// ];

// //'Samir is 27 years old'
// const usersObject = users.reduce((usersObject, user) => {
//   usersObject[user.name] = user.age;
//   return usersObject;
// }, {});

// console.log(usersObject)





// const authors = [
//   { firstName: "Beatrix", lastName: "Potter" },
//   { firstName: "Ann", lastName: "Martin" },
//   { firstName: "Beverly", lastName: "Cleary" },
//   { firstName: "Roald", lastName: "Dahl" },
//   { firstName: "Lewis", lastName: "Carroll" }
// ];
// let fullAuthorNames;

// // fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// // Write your code below

// fullAuthorNames = authors
// .map(authors => `${authors.firstName} ${authors.lastName}`);
// console.log(fullAuthorNames);









// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

// const users = userNames
// .filter(userName => userName[0] === "S")
// .map(userName => ({ userName }));

// console.log(users);







// const users = [
//   {userName: 'Samir', age: 27},
//   {userName: 'Angela', age: 33},
//   {userName: 'Beatrice', age: 42},
//   {userName: 'Shaniqua', age: 30},
//   {userName: 'Marvin', age: 23},
//   {userName: 'Sean', age: 47}
// ];


// let overThirty = users
// .filter(userName => userName.age >= 30)
// .map(userName => userName.userName);

// console.log(overThirty)







// const todos = [
//   {
//       todo: 'Buy apples',
//       done: false
//   },
//   {
//       todo: 'Wash car',
//       done: true
//   },
//   {
//       todo: 'Write web app',
//       done: false
//   },
//   {
//       todo: 'Read MDN page on JavaScript arrays',
//       done: true
//   },
//   {
//       todo: 'Call mom',
//       done: false
//   }
// ];
// let unfinishedTasks;

// // unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// // Write your code below

// unfinishedTasks = todos
// .filter(todo => todo.done === false)
// .map(todo => todo.todo)

// console.log(unfinishedTasks);






const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

    // Result: { name: 'paper towels', price: 6.99 }

    const newProduct = products
    .filter(product => product.price < 10)
    .reduce((highest, product) => {
      if (highest.price > product.price) {
        return highest;
      }
      return product;
    });

    console.log(newProduct)




