var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
  var a = [element,...array]
  return(a)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var a = [...array, element]
  return a
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
  //return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pops()
  return array
}

function removeElementFromEndOfArray(array) {
  var a = array.slice(0, array.length-1)
  return a
}
