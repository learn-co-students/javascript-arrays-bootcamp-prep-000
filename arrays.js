var chocolateBars = ['snickers','hundred grand','kitkat', 'skittles']
addElementToBeginningOfArray = function(arr, item) {

  return [item, ...arr]
}
destructivelyAddElementToBeginningOfArray = function(arr, item) {

  arr.unshift(item);
  return arr
}
addElementToEndOfArray = function(arr, item) {
  return [...arr, item]
}
destructivelyAddElementToEndOfArray = function(arr, item) {

  arr.push(item);
  return arr
}
destructivelyRemoveElementFromBeginningOfArray = function() {
  return array.shift()
}
destructivelyRemoveElementFromEndOfArray = function() {
  return array.pop()
}
accessElementInArray = function(array,index) {
  element = array[index]
  return element
}
removeElementFromBeginningOfArray = function(array) {
  element = array.slice(1)
  return element
}

removeElementFromEndOfArray = function(array) {
  element = array.slice(0,array.length-1)
  return element
}
