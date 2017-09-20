function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  newArray = [array, ...element];
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1);
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length - 1);
  return newArray
}
