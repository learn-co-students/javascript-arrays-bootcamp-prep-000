var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]


function addElementToBeginningOfArray(array, foo){
  var arraymod = ["foo", ...array]
  return arraymod
}

function destructivelyAddElementToBeginningOfArray(array, foo){
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, foo){
  var arraymod = [...array, "foo"]
  return arraymod
}

function destructivelyAddElementToEndOfArray(array, foo){
  array.push("foo")
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  arraymod = array.slice(1, array.length)
  return arraymod
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
