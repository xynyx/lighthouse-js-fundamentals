function lastIndexOf(array, value) {
// Count backwards from final index to find the FIRST instance of the number (which is actually the last instance if counting backward!)
  for (let i = array.length - 1; i >= 0; i--) {
    if (value === array[i]) {
      // Want to return i (being the index), not array[i], which would be the actual value itself
      return i;
    }
  }
  // Return -1 if the value never occurs
  // put OUTSIDE of loop, once the code has completely checked the entire array
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);