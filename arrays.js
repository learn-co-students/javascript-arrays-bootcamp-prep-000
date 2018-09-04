var chocolateBars = ['snnickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, x) {
  b = [x,...a]
  return b
}

function destructivelyAddElementToBeginningOfArray(a, x) {
  a.unshift(x)
  return a
}

function addElementToEndOfArray(a, x) {
  b = [...a,x]
  return b
}

function destructivelyAddElementToEndOfArray(a, x) {
  a.push(x)
  return a
}

function accessElementInArray(a,x) {
  return a[x]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  return a
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
  return a
}

function removeElementFromEndOfArray(a) {
  return a.slice(0,a.length - 1)
}