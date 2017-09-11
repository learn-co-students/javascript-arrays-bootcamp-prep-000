var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

var addElementToBeginningOfArray = function(arr,elem){
  return [elem, ...arr]
}

var destructivelyAddElementToBeginningOfArray = function(arr, elem){
  arr.unshift(elem)
  return arr
}

var addElementToEndOfArray = function(arr, elem) {
  return [...arr, elem]
}

var destructivelyAddElementToEndOfArray = function(arr, elem) {
  arr.push(elem)
  return arr
}

var accessElementInArray = function (arr,index) {
  return arr[index]
}

var destructivelyRemoveElementFromBeginningOfArray = function(arr) {
  arr.shift()
  return arr
}

removeElementFromBeginningOfArray = function (arr) {
  return arr.slice(1)
}

var destructivelyRemoveElementFromEndOfArray = function(arr) {
  arr.pop()
  return arr
}

var removeElementFromEndOfArray = function(arr) {
  return arr.slice(0,arr.length - 1)
}
