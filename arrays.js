var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) { // does not modify original array
  var c = [b,...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(a, b) { //modify the original array
  a.unshift(b)
  return a
}

function addElementToEndOfArray(a, b) {
  var c = [...a, b]
  return c
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b)
  return a
}

function accessElementInArray(a,b){
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift(0)
  return a
}

function removeElementFromBeginningOfArray(a) {
  var b = a.slice(1)
  return b
}

function destructivelyRemoveElementFromEndOfArray(a) {
   a.pop()
   return a
}

function removeElementFromEndOfArray(a) {
  var b = a.slice(0, a.length -1)
  return b
}
