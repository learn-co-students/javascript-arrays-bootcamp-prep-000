var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array,element) {
  var newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array,element) {
  var mutatedArray = array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element) {
    var newArray = [...array,element]
    return newArray
}
function destructivelyAddElementToEndOfArray(array,element) {
    var mutatedArray = array.push(element)
    return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  var mutatedArray = array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array,element) {
  var mutatedArray = array.pop(element)
  return array
}
function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1)
  return newArray
}
