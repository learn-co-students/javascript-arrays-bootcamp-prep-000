function chocolateBars() {
  var chocolate = ["snickers","hundred grand","kitkat","skittles"]
  return chocolate
}

function addElementToBeginningOfArray(array, elem){
  array = [elem, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, elem) {
  myArray = array.unshift(elem)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, elem) {
  myArray = array.push(elem)
  return array
}

function accessElementInArray(array, i){
  myArray = array
  return myArray[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift()
    return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  myArray = array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length - 1)
}
