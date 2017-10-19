var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray (array1, elementToAddToBeginning1){
  return [elementToAddToBeginning1, ...array1]
}
function destructivelyAddElementToBeginningOfArray (array2, elementToAddToBeginning2){
  array2.unshift(elementToAddToBeginning2);
  return array2
}
function addElementToEndOfArray (array3, elementToAddToEnd1) {
  return [...array3, elementToAddToEnd1]
}
function destructivelyAddElementToEndOfArray(array4, elementToAddToEnd2) {
  array4.push(elementToAddToEnd2);
  return array4
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1)
}
