function factorial(n) {
  first = 1;
  for(i=1; i<=n; i++){
    first = first * i;
  }
  return first;
}
console.log(factorial(10));


function factorial2(m){
  var total = 1;
  while(m){
    total *= m--;
  }
  return total;
}
console.log(factorial2(10));
