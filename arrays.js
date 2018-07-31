var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  
  function addElementToBeginningOfArray(array, element){
    //should not alter the original arr
    return [element, ...array];
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){
    //should alter the original arr
    array.unshift(element);
    return array;
  }
  
  function addElementToEndOfArray(array, element){
    //These functions also take two arguments, an array and an element to add to the end of the array. 
    //should not alter the original array; 
    return [...array, element];
  }
  
  function destructivelyAddElementToEndOfArray(array, element){
    //These functions also take two arguments, an array and an element to add to the end of the array. 
    //should alter the original array.
    array.push(element);
    return array;
  }
  
  function accessElementInArray(array, index){
    return array[index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array){
    //that takes an array as its only argument and removes the first element. Your function should then return the entire array, and it should mutate the array.
    array.shift();
    return array;
  }
  
  function removeElementFromBeginningOfArray(array){
    return array.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(array){
   array.pop();
   return array;
  }
  
  function removeElementFromEndOfArray(array){
    return array.slice(0, array.length - 1);
  }
  
  