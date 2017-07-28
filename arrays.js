var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, toAdd){
  var newArray = [toAdd, ...array]
  return newArray;
}


function destructivelyAddElementToBeginningOfArray(array, toAdd) {
  array.unshift(toAdd);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}


function destructivelyAddElementToEndOfArray(array, toAdd) {
  array.push(toAdd);
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
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
