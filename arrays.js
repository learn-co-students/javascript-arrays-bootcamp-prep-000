var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars = [element, ...chocolateBars]
  return chocolateBars
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(element)
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, element) {
  chocolateBars = [...chocolateBars, element]
  return chocolateBars
}
function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push(element)
  return chocolateBars
}
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, element) {
  chocolateBars.shift(element)
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop(chocolateBars)
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}
