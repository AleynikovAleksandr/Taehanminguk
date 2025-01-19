function reverseIndex(array) {
    let reversedArray = []; 
  
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
  
    console.log(reversedArray); 
  }
  
  let array = [1, 2, 3, 4, 5];
  reverseIndex(array); 
  