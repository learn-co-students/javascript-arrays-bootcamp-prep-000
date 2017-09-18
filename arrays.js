var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element) {
  var array = [1]
  var element = ['foo', ...array]
  return element
}

// I'm not altering the original array?
function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1]
  array.unshift('foo')
  return array
}

function addElementToEndOfArray(array, element){
  var array = [1]
  var element = [...array, "foo"]
  return element
}

// I'm not altering the original array?
function destructivelyAddElementToEndOfArray(array, element) {
  var array = [1]
  array.push('foo')
  return array
}

function accessElementInArray(array, index) {
  var array = [1, 2, 3]
  var index = 2
  return array[index]
}

// Does equal [1, 2] so idk anymore
// I'm not altering the original array?
function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array = array.slice(1)
  return array
}

// Does equal [1, 2] so idk anymore
// I'm not altering the original array?
function destructivelyRemoveElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var array = [1, 2 , 3]
  return array.slice(0, array.length - 1)
}
