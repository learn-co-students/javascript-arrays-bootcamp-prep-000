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
var removeElementFromBeginningOfArray = (array, element) => {
  array.shift(element);
  return array;
}
var removeElementFromEndOfArray = (array, element) => {
  array.pop(element);
  return array;
}
