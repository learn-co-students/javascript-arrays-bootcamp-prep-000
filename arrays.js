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
    return [someElement, array];
  }