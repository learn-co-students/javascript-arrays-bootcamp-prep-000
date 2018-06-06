var chocolateBars = [
  "snickers",
  "hundred grand", 
  "kitkat", 
  "skittles"
  ];
  
  var addElementToBeginningOfArray = [1,2];
  [3, ...addElementToBeginningOfArray];
  
  var destructivelyAddElementToBeginningOfArray = [1,2];
  destructivelyAddElementToBeginningOfArray.unshift(3);
  
  var addElementToEndOfArray = [10,11];
  [...addElementToEndOfArray, 12];
  
 var destructivelyAddElementToEndOfArray = [10,11];
destructivelyAddElementToEndOfArray.push(12);

