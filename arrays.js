var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, addition) {var newArray = [addition, ...array]
return newArray}

function destructivelyAddElementToBeginningOfArray (array, addition) {array.unshift(addition)
  return array}

function addElementToEndOfArray (array, addition) {var newArray = [...array, addition]
return newArray}

function destructivelyAddElementToEndOfArray (array, addition)
{array.push(addition)
  return array}

function accessElementInArray(array, index) {return array[index]}

function destructivelyRemoveElementFromBeginningOfArray(array) {array.shift()
  return array}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray}

function destructivelyRemoveElementFromEndOfArray(array) {array.pop()
  return array}

function removeElementFromEndOfArray(array) {var newArray = array.slice(0, array.length - 1)
  return newArray}

