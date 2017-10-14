var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(chocolateBars,n) {
  return chocolateBars[n];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift(foo)
  return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo) {
  chocolateBars.push(foo)
  return chocolateBars
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars = chocolateBars.slice(1)
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

function addElementToBeginningOfArray(chocolateBars, foo) {
  return [foo, ...chocolateBars]
}

function addElementToEndOfArray(chocolateBars, foo) {
  return [...chocolateBars, foo]
}
