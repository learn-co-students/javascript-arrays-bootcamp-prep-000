var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array,element) {
  var c = [element,...array]
  return c
}
function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element) {
  var addin = element
  var c = [...array,addin]
  return c
}
function destructivelyAddElementToEndOfArray(array,element) {
  array.push (element)
  return array
}
function accessElementInArray(array,index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  var array1 = array.slice(1)
  return array1
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  var array1 = array.slice(0,array.length-1)
  return array1
}
