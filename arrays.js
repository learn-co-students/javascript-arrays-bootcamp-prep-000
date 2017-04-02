var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArr = array;
  newArr.unshift(element);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArr = array;
  newArr.push(element);
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  if (index >= 0 && index <= array.length - 1){
  return array[index];
  }
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift();
   return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArr = array.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop();
   return array;
}

function removeElementFromEndOfArray(array) {
  var newArr = array.slice(0, array.length - 1);
  return newArr;
}