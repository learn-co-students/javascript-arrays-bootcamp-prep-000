var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var alterbegin = array
  alterbegin.unshift(`${element}`)
  return alterbegin
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var alterend = array
  alterend.push(`${element}`)
  return alterend
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var removebegin = array
  removebegin.shift()
  return removebegin
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var removeend = array
  removeend.pop()
  return removeend
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}