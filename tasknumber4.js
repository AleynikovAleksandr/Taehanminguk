let num = 4;
let sum = 0; 
let factorial = 1; 

for (let i = 1; i <= num; i++) {
  factorial *= i; 
  sum += factorial; 
}

console.log(sum); 
