/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

let numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];


// This involves using the map() method twice, once on outer array and once on inner array
// No for loops are used, however this doesn't fulfill the requirement of the assignment (though it seems a little cleaner!)

// let evenOrOdd = numbers.map(function(nested) {
//   return nested.map(function(element) {
//     if (element % 2 === 0) {
//       return "even";
//     } else {
//       return "odd";
//     }
//   })
// });

// console.log(evenOrOdd);



for (r = 0; r < numbers.length; r++) {
  for (c = 0; c < numbers[r].length; c++) {
    if (numbers[r][c] % 2 === 0) {
      // return will not work here as there is no function (unlike map() method)
      // must explicitly locate object in array
      numbers[r][c] = "even";
    } else {
      numbers[r][c] = "odd";
    }
  }
}

console.log(numbers);