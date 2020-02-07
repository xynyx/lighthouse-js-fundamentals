/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  }, // , after every key:value pair, not ;
  close: function() {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
  } // no comma on the last key:value pair
}; // Make sure to include ; at the end of the entire object, as it is still a declaration (just like var = myString = "hello";)


/* NAMING CONVENTIONS */ 

// 1) Never use a number for the start of a key (eg. 1stChild)
// 2) Don't use quotes to name the key
// 3) CamelCase
