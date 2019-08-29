var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(array,element) {
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element) {
  return [...array,element]
}
function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}
function accessElementInArray(array,index) {
  return (array[index]);
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
function modifyMiddleOfArray(array) {
  array.splice(1,3,6,6,6)
  return array
}
modifyMiddleOfArray([1,2,3,4,5,6,7,8])
