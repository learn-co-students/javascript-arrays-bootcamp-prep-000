var chocolateBars = ['snicker', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(array, element) {

return [element,...array]

}

function destructivelyAddElementToBeginningOfArray(chocolateBars, name) {
    chocolateBars.unshift(name)
    return chocolateBars

}

function addElementToEndOfArray(chocolateBars, name) {
  return [...chocolateBars, name]
}

function destructivelyAddElementToEndOfArray(chocolateBars, name) {
  chocolateBars.push(name)
  return chocolateBars
}

function accessElementInArray(array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

 function removeElementFromBeginningOfArray(array) {

  return array.slice(1)

}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
