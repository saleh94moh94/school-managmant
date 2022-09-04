function shirtWidth(num) {
  if(num <= 20 && num >= 30) return "You should select a size S";
  else if(num <= 30 && num >= 40) return "You should select a size m";
  else if(num <= 40 && num >= 50) return "You should select a sizel";
  else return "INVALID SCORE";
}
var output = shirtWidth();
console.log(output); 