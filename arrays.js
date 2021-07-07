var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var chocolateBarsN = [element, ...array]
  return chocolateBarsN
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars.unshift(element)
  return chocolateBars
}
