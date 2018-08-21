var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo) {
  return ["foo", ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift("foo")
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, foo) {
  return [...chocolateBars,"foo"]
}
function destructivelyAddElementToEndOfArray(chocolateBars, foo) {
  chocolateBars.push("foo")
  return chocolateBars
}
function accessElementInArray(chocolateBars, Array) {
  return (chocolateBars,3)
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray (chocolateBars) {
  return chocolateBars.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray (chocolateBars) {
  return chocolateBars.slice(0,chocolateBars.length - 1)
}