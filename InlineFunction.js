
function laugh(num) {
  let haha = "";
  for (let i = 0; num > i; i++) {
    haha += "ha";
  }
  return haha + "!"; //must use return and NOT console.log here; returns undefined values as well otherwise
 }




/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function laugh(num) {
  let haha = "";
  for (let i = 0; num > i; i++) {
    haha += "ha";
  }
  return haha + "!"; //must use return and NOT console.log here; returns undefined values as well otherwise
 });















//  // Function declaration that takes in two arguments: a function for displaying
// // a message, along with a name of a movie
// function movies(messageFunction, name) {
//   messageFunction(name);
// }

// // Call the movies function, pass in the function and name of movie
// movies(function displayFavorite(movieName) {
//   console.log("My favorite movie is " + movieName);
// }, "Finding Nemo");
