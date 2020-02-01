/*
 * Programming Quiz: Build A Triangle (5-3)
 */


// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// Start with one *, add another to next line, add 3rd to next, etc
function buildTriangle(height) {
  // Make var for length of *, starting at 1
  let length = 1;
  // Make var to store the built triangle as it gets assembled
  let triangle = "";
  for (var i = 0; i < height; i++) {
    // makeLine is called and added to triangle string, building each line
    triangle += makeLine(length);
    // Incrementing length adds one new * each line
    length++;
  }
  // Returns fully built triangle all at once; must return something or "undefined" appears on last line
  return triangle;
}
// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
console.log(buildTriangle(10));