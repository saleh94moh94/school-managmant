function findLongestWord(str) {
 
  var strSplit = str.split(' ');


  // Step 2. Use the reduce method
  var longestWord = strSplit.reduce(function(longest, currentWord) {
    if(currentWord.length > longest.length)
       return currentWord;
    else
       return longest;
  }, "");