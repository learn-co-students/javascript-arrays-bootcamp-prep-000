var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kat',
  'skittles'
  ];
  
function addElementToBeginningOfArray(array, element){
  var myArray = [array];
  myArray = [element, ...array];
  return myArray;
  }
  
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
  }

function addElementToEndOfArray (array, element){
  var myArray = [array];
  myArray = [...array, element];
  return myArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}