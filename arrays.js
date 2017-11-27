var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(array, element) {
  array.concat()
  return array

}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {

}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  array[index]
  return index // array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array) {
  array.shift() //shift
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(2, 3) // pop
  return array
}
function removeElementFromEndOfArray(array) {
  array.slice(array) // slice
  return array
}
