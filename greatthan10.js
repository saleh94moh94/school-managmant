function isGreaterThan10(num) {
  if (num > 10) {
    return "true";
  }
  return "fales";
}
console.log(isGreaterThan10(5)); // "Equal"
console.log(isGreaterThan10(10)); // "Not equal"
console.log(isGreaterThan10(11)); // "Not equal"
