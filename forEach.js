/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];


test.forEach(function(element, index) {
 if (element % 3 === 0) {
   // you cannot simply add 100 to the element using forEach... (eg. return element+=100)
   // it will change the element variable, but NOT the object (array), and therefore return the exact same value, unchanged
   // objects(arrays) are stored by value, however since the array is referring to the OBJECT, it remains unchanged 
   // therefore you must access the array OBJECT
   // see https://stackoverflow.com/questions/12482961/is-it-possible-to-change-values-of-the-array-when-doing-foreach-in-javascript/12482991
   // however, the map() method can be used to overwrite an array and return the new array that is modified
   this[index] = (element+100);
 }
}, test); // thisArg parameter; used as the value for each invocation of the callback using 'this' (instead of specifying an array parameter in the forEach method)

console.log(test);