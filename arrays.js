var chocolateBars = 
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  function addElementToBeginningOfArray(array, someElement) {
    return [someElement, ...array];
  }
  
  function destructivelyAddElementToBeginningOfArray(array, someElement) {
    array.unshift(someElement);
    return array;
  }
  
  function addElementToEndOfArray(array, someElement) {
    return [...array, someElement];
  }
  
  function destructivelyAddElementToEndOfArray(array, someElement) {
    array.push(someElement);
    return array;
  }
  
  function accessElementInArray(array, index) {
    return array[2];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    return array;
  }
  
  function removeElementFromBeginningOfArray(array) {
    array.slice(1);
    return array.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
  }
  
  function removeElementFromEndOfArray(array) {
    array.slice(0, array.length - 1);
    return array.slice(0, array.length - 1);
  }
  
  