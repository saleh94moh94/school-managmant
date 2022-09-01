function largerThan3AndLessThan18(x, y , z) {
  if ((x > 3 && x < 18 && y > 3 && y < 18 && z > 3 && z < 18 ))
    
     {
    return true;
     } 
    else 
     {
    return false;
  }
}

console.log(largerThan3AndLessThan18(2,4,20));
console.log(largerThan3AndLessThan18(5,6,7));
console.log(largerThan3AndLessThan18(3,6,18));