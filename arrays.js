var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(Array, element) {
    Array = [element, ...Array];
    return Array 
} 

function destructivelyAddElementToBeginningOfArray(Array, element) {
  Array.unshift(element);
   return Array
}


function addElementToEndOfArray(array, element) {
   array = [...array, element];
   return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array,index) {
  return array[index];
  }
  
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array 
}

function removeElementFromEndOfArray(bae) {
  bae.slice()
  return bae
}

function removeElementFromBeginningOfArray(array) {
  var array2 = array.slice(1); 
  return array2
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  var array2 = array.slice(0, array.length - 1);
  return array2
}

