const fruits = ['apple', "pear", "cherry"];


//for loop iteration
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//forEach iteration
fruits.forEach(function(fruit) {
  console.log(fruit);
})

//forEach one line
fruits.forEach(fruit => console.log(fruit));