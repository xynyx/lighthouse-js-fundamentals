function howManyHundreds(bottles) {
  let nearestHundred = bottles % 100;
  nearestHundred = bottles - nearestHundred;
  const containers = nearestHundred / 100;
  return containers;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);