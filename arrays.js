var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(a,e) {
  var n = [e,...a]
  return n
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e)
  return a
}

function addElementToEndOfArray(a,e) {
  var n = [...a,e]
  return n
}

function destructivelyAddElementToEndOfArray(a,e) {
  a.push(e)
  return a
}

function accessElementInArray(a,i) {
  return a[i]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  return a
}

function removeElementFromBeginningOfArray (a) {
  var n = a.slice(1)
  return n
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop()
  return a
}

function removeElementFromEndOfArray(a){
  var n = a.slice(0,a.length-1)
  return n
}
