var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, i) {
  chocolateBars = ["foo", ...chocolateBars]
  return chocolateBars
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, i) {
  chocolateBars.unshift("foo")
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, i) {
  chocolateBars = [...chocolateBars, "foo"]
  return chocolateBars
}
function destructivelyAddElementToEndOfArray(chocolateBars, i) {
  chocolateBars.push("foo")
  return chocolateBars
}
function accessElementInArray(chocolateBars) {
  return chocolateBars[2];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1);
  return chocolateBars
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}