var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles'] 

function addElementToBeginningOfArray(array, element) {
  array = [element,...array];
  return array;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element) {
 array = [...array,element];
  return array;
}


function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
  return array;
}


function accessElementInArray(array,index) {
  element = array[index];
  return element;
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  
  array.shift('n');
  return array;
  
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
  
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop('n');
  return array;
}


function removeElementFromEndOfArray(array) {
  return array.slice(0,-1);
  
}