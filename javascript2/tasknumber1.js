let word = 'Арнольд';

let result = word
  .split('') 
  .filter(char => !['а', 'о', 'А', 'О'].includes(char)) 
  .join(''); 

console.log(result); 
