var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray( array, e ) {
  var newArray = [e, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray( array, e ) {
  array.unshift(e)
  return array
}

function addElementToEndOfArray ( array , e ) {
  var newArray = [...array, e]
  return newArray
}

function destructivelyAddElementToEndOfArray ( array, e ) {
  array.push(e)
  return array
}


function accessElementInArray( array, n ) {
  var element = array[n]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray ( array, e ) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray ( array, e ) {
  var myArray = array.slice(1)
  return myArray
}

function destructivelyRemoveElementFromEndOfArray ( array, e ) {
  array.pop()
  return array
}

function removeElementFromEndOfArray ( array, e ) {
  var myArray = array.slice(0, array.length - 1)
  return myArray
}