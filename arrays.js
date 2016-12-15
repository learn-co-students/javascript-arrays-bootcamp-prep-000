var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];
function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array],
  return newArray
};
function destructivelyAddElementToBeginningOfArray(array, element){
  var array[],
  array.unshift(element)
};
function addElementToEndOfArray(array, element){
  var newArray = [...array, element],
  return newArray
};
function destructivelyAddElementToEndOfArray(array, element){
  array.shift(element),
  return array
};
function accessElementInArray(array, index) {
  return array[index]
};
function destructivelyAddElementToBeginningOfArray(array) {
  array.shift(),
  return array
};
function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
};
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(),
  return array
};
function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1)
  return array
};
