var chocolateBars = ["snickers", "hundred grand", "kitkat"];

function addElementToBeginningOfArray(element1, element2) {
  return [element2, ...element1];
}

function destructivelyAddElementToBeginningOfArray(array1) {
  array1.unshift("foo")
  return array1
}

function addElementToEndOfArray(element1, element2) {
  return [...element1, element2];
}

function destructivelyAddElementToEndOfArray(array1) {
  array1.push("foo")
  return array1
}

function accessElementInArray(list1) {
  return list1[2]
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
