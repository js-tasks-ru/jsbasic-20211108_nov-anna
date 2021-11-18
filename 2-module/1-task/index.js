function sumSalary(salaries) {
  let summa = 0;
  for (let key in  salaries) {
    if (typeof salaries[key] == 'number' && isFinite(salaries[key])) {
       summa +=  salaries[key];
    }
  }
  
  return summa;
}