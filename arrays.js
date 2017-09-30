var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ]

function addElementToBeginningOfArray(a,e) {
  var a = [1]
  var b = [e,...a]
  return b
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e)
  return a
}

function addElementToEndOfArray(a,e) {
  var a = [1]
  var b = [...a,e]
  return b
}

function destructivelyAddElementToEndOfArray(a,e) {
  a.push(e)
  return a
}

function accessElementInArray(a,i) {
  arr = a[i]
  return arr
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}
