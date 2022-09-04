function findMinLengthOfThreeWords(w1, w2, w3) {
  var arr = word1.concat(word2, word3);
  arr.split(",");

  arr.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  });
}

var output = findMinLengthOfThreeWords('a', 'bee', 'gracele');
console.log(output);  