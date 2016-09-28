var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var destructivelyAddElementToBeginningOfArray = [...array, element]
  return destructivelyAddElementToBeginningOfArray = [element, ...array];
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}
function accessElementInArray(array, element){
  console.log(accessElementInArray[0])
}
