function camelize(str) {
  return str
    .split('-') 
    .map( 
      (first, second) => second == 0 ? first : first[0].toUpperCase() + first.slice(1)
    )
    .join('');
}
