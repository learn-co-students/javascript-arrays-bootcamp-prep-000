var chocolateBars = ['snickers','hundred grand', 'kit kat', 'skittles'];
console.log(chocolateBars);

function addElementToBeginningOfArray (array, element) {
  var newArray = array;
  newArray = [element, ...newArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element);
 return array;
}

function addElementToEndOfArray (array, element) {
  var newArray = array;
  newArray = [...newArray, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element);
 return array;
}

function accessElementInArray (array, index) {
  output = array[index];
  return output;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array, element) {
  newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array, element) {
  newArray = array.slice(0,array.length-1);
  return newArray;
}
