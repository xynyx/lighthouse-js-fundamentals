/* Directions:
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each */



/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

// ***Remember that forEach(function(value, index, array))!***
donuts.forEach(function(key) {
  // Key accesses the values in the object, however you must still specify which property
  // Cannot just use donuts.type or .type, as donuts is already specified in the forEach loop
  // Must make new variable for the value of each item in the array
  console.log(key.type + " donuts cost $" + key.cost + " each");
})