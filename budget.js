function budgetStatus(num) {
  if (num > 250) {
    return "over budget";
  }
  else if (num <=250)
  {
      return "under budget"
  }
  else{
  return "no budget";
}
}
console.log(budgetStatus(500)); 
console.log(budgetStatus(1000)); 
console.log(budgetStatus(250)); 
console.log(budgetStatus());