var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ];

function addElementToBeginningOfArray(array, element){
  var returnArray = [element, ...array];
  return returnArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  
  return array;
}

function addElementToEndOfArray(array, element){
  var returnArray = [...array, element];
  return returnArray;
} 
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  var returnArray = array.slice(1);
  
  return returnArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
}
