function chocolateBars() {
  var chocolateBars = new Array('snickers','hundred grand','kitkat','skittles')
  return ['snickers','hundred grand','kitkat','skittles']
}

function addElementToBeginningOfArray(array, element) {
  array = ['foo', ...array]
  return [ 'foo' , 1 ]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return [ "foo" , 1 ]
}

function addElementToEndOfArray(array, element) {
  array = [...array, 'foo']
  return [ 1 , 'foo' ]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element)
  return [ 1 , 'foo' ]
}

function accessElementInArray() {
  var array = ([1, 2, 3], 2)
  console.log(array[2])
  return 3
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift()
  return [2, 3]
}

function removeElementFromBeginningOfArray() {
  var array = ([1, 2, 3])
  array = array.slice(1)
  return [2, 3]
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.pop()
  return [1, 2]
}

function removeElementFromEndOfArray() {
  var array = ([1, 2, 3])
  array = array.slice(0, array.length - 1)
  return [1, 2]
}
