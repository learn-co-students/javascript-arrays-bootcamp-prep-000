var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a,e) {
  var x = a

  return [e,...a]
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e)
  return a
}

function addElementToEndOfArray(a,e) {
  return [...a,e]
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

function removeElementFromBeginningOfArray(a) {
  a = a.slice(1)
  return a
}

function removeElementFromEndOfArray(a) {
  a.pop()
  return a
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
  return a
}
