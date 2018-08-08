var chocolateBars = ["snikers", "hundred grand", "kitkat", "skittles"];

// Temporarily and permenantly adds the element 'foo' to the beginning of array 
function addElementToBeginningOfArray(array, element) {
 return ['foo', ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift('foo'); 
 return array;
}




// Temporarily and permanatly adds the element 'foo' to the end of array
function addElementToEndOfArray(array, element) {
  return [...array, 'foo'];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array;
}





// Acceses element 2 in array
function accessElementInArray(array, index) {
  return array[2];
}




// Temporarily and permenantly removes an element from beginning of array
function removeElementFromBeginningOfArray(array) {
  return array.slice(-2);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}




// Temporarily and ermenantly removes the element at the end of array
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}


