var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var newArray = [...array];
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array];
  newArray.push(element);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
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
  first = array.slice(1);
  return first;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  last = array.slice(0,2);
  return last;
}




