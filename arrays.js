var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//1
function addElementToBeginningOfArray(array, element) {
 array = [`${element}`, ...array];
 return array;
}

//2 
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(`${element}`);
  return array;
}

//3 
function addElementToEndOfArray(array, element) {
  array = [...array, `${element}`];
  return array;
}

//4 
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(`${element}`);
  return array;
}

//5 
function accessElementInArray(array, index) {
  return array[index];
}

//6 
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

//7 
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

//8 
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

//9 
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}
