function factorial(n) {
  first = 1;
  for(i=1; i<=n; i++){
    first = first * i;
  }
  return first;
}


function factorial2(m){
  let total = 1;
  while(m){
    total *= m--;
  }
  return total;
}

