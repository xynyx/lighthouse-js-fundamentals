/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(laughs) {
  let laughChain = "";
  for (let i = 0; i < laughs; i++) {
      laughChain += "ha";
  }
  laughChain += "!";
  return laughChain;
};

console.log(laugh(10));
