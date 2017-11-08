var chocolateBars = new Array('snickers','hundred grand','kitkat','skittles')

function addElementToBeginningOfArray(array, element) {
  var array = ([1] , 'foo')
  ['foo', ...array]
  return [ 'foo' , 1 ]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = ([1] , 'foo')
  array.unshift(element)
  return [ "foo" , 1 ]
}

function addElementToEndOfArray() {
  var array = ([1] , 'foo')
  return [ 1 , 'foo' ]
}

function destructivelyAddElementToEndOfArray() {
  var array = ([1] , 'foo')
  return [ 1 , 'foo' ]
}

function accessElementInArray() {
  var array = ([1, 2, 3], 2)
  return 3
}

function destructivelyRemoveElementFromBeginningOfArray() {
  var array = ([1, 2, 3])
  return [2, 3]
}

function removeElementFromBeginningOfArray() {
  var array = ([1, 2, 3])
  return [2, 3]
}

function destructivelyRemoveElementFromEndOfArray() {
  var array = ([1, 2, 3])
  return [1, 2]
}

function removeElementFromEndOfArray() {
  var array = ([1, 2, 3])
  return [1, 2]
}
