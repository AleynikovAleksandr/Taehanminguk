function changeElem(array, n) {
    return array.map(element => element * n);
  }
  
  let array = [1, 2, 3, 4];
  let result = changeElem(array, 3);
  
  console.log(result); 
  console.log(array);  
  