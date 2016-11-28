var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
}

var accessElementInArray = (array, index) => {
  return array[index];
}

var removeElementFromBeginningOfArray = (array) => {
  array.shift();
  return array;
}

var removeElementFromEndOfArray = (array) => {
  return array.slice(0, array.length - 1);
}
