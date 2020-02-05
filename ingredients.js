const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}
// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
 

// Write any loop (while or for) that prints out the contents of ingredients backwards:
// .length is 8, however there are only 7 items in the array (0 - 7)
// If you start at .length 8, that is ingredients[8], which does not exist => undefined
// must use .length - 1 to start at ingredients[7], the last ingredient (total of 8 ingredients)
for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}