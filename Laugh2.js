/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */


function laugh(num) {
  let haha = "";
  for (let i = 0; num > i; i++) {
    haha += "ha";
  }
  return haha + "!"; //must use return and NOT console.log here; returns undefined values as well otherwise
 }
 
 console.log(laugh(6));
 console.log(laugh(10));
