var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
 const newarray = [element, ...array]
 return newarray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  const newarray2 = [...array, element]
  return newarray2
}
function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element) 
 return array
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  const newarray3 = array.slice(1)
  return newarray3
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  const newarray4 = array.slice(0, array.length - 1)
  return newarray4
}
function accessElementInArray(array, index) {
  return array[index]
}