var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var empty = new Array()
function addElementToBeginningOfArray(empty, a) {
  empty.unshift(a)
  return empty
}
function destructivelyAddElementToBeginningOfArray(empty, a) {
  empty.splice(0, 0, a)
  return empty
}

function addElementToEndOfArray(empty, a) {
  empty.push(a)
  return empty
}

function destructivelyAddElementToEndOfArray(empty, a) {
  empty.splice(-1,0)
  empty.push(a)
  return empty
}

function accessElementInArray(empty, a) {
  return empty[a]
}

function destructivelyRemoveElementFromBeginningOfArray(empty, a) {
  empty.shift()
  return empty
}

function removeElementFromBeginningOfArray(empty) {
  var poop = empty.slice(1)
  return poop
}

function destructivelyRemoveElementFromEndOfArray(empty) {
  empty.pop()
  return empty
}

function removeElementFromEndOfArray(empty) {
  var poop = empty.slice(0,-1)
  return poop
}
