function range(start, end, step) {
  let array = [];
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return array;
  }
  // add the start value first before subsequently adding to it
  array.push(start);
  while (start < end) {
    // add the step to the start value, and make it the new start value for the next iteration
    start += step;
    // Only push into array if after adding the step it does not go past the end value
    if (start <= end) {
      array.push(start);
    }
  }
  return array;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));




