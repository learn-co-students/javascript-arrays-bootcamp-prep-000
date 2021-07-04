var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var newBar = "foo"

function addElementToBeginningOfArray(chocolateBars, newBar) {
  const chocolateBars2 = [newBar, ...chocolateBars]
  return chocolateBars2
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, newBar) {
  chocolateBars.unshift(newBar)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, newBar) {
  const chocolateBars2 = [...chocolateBars, newBar]
  return chocolateBars2
}

function destructivelyAddElementToEndOfArray(chocolateBars, newBar) {
  chocolateBars.push(newBar)
  return chocolateBars
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars2 = chocolateBars.slice(1)
  return chocolateBars2
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromEndOfArray(chocolateBars) {
  var chocolateBars2 = chocolateBars.slice(0, chocolateBars.length - 1) // "length - 1" removes the last array
  return chocolateBars2
}
