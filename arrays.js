var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  return newArray = [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return newArray = [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
  return array[0];
}
function removeElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}
