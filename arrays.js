var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(a,b) {
  a.unshift(b)
}

function destructivelyAddElementToBeginningOfArray(a,b) {
  a[0] = b
}

function addElementToEndOfArray(a,b) {
  a.push(b)
}

function destructivelyAddElementToEndOfArray(a,b) {
  var c = a.length
  var d = c - 1
  a[d] = b
}

function accessElementInArray(a,b) {
  a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {

}

function removeElementFromBeginningOfArray(a) {
  a.slice()
}

function destructivelyRemoveElementFromEndOfArray(a) {

}

function removeElementFromEndOfArray(a) {
  a.pop()
}
