var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars) {
  chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
  var newchocolateBars = chocolateBars = ["foo", ...chocolateBars]
  return newchocolateBars
} 
function destructivelyAddElementToBeginningOfArray(chocolateBars) {
  chocolateBars.unshift("foo")
}
function addElementToEndOfArray(chocolateBars) {
  var newNewChocolateBars = [...chocolateBars, "foo"]
}
function destructivelyAddElementToEndOfArray(chocolateBars) {
  chocolateBars.push("foo")
}
function accessElementInArray(chocolateBars) {
return chocolateBars[2];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.Shift(1)
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars) {
  var newNewNewChocolateBars = chocolateBars.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars.slice(0, chocolateBars.length - 1)
}