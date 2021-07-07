var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, crunch) {
  return [crunch, ...chocolateBars]
}
 function destructivelyAddElementToBeginningOfArray(chocolateBars, godiva) {
  chocolateBars.unshift(godiva)
  return chocolateBars
}
 function addElementToEndOfArray(chocolateBars, butterfingers) {
  return [...chocolateBars, butterfingers]
}
 function destructivelyAddElementToEndOfArray(chocolateBars, dove) {
  chocolateBars.push(dove)
  return chocolateBars
}
 function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}
 function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}
 function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}
 function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
 function accessElementInArray(chocolateBars, snickers) {
  return chocolateBars[2]
}