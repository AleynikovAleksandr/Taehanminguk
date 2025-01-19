function sumElems(array) {
    return array
      .map(element => Number(element)) 
      .filter(number => !isNaN(number)) 
      .reduce((sum, number) => sum + number, 0); 
  }
  
  let array = ['10', 'Строка', '5g', '15', '05'];
  let result = sumElems(array);
  
  console.log(result); 
  