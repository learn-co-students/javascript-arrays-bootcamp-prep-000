var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(a, e) {
  var bloop = [e, ...a];
  return bloop
}

function destructivelyAddElementToBeginningOfArray(a, e) {
  a.unshift(e)
  return a
}

function addElementToEndOfArray(a, e) {
  var bleep = [...a, e]
  return bleep
}

function destructivelyAddElementToEndOfArray (a, e) {
  a.push(e)
  return a
}

function accessElementInArray(a, i) {
  return a[i]
}

function destructivelyRemoveElementFromBeginningOfArray(a, e) {
  a.shift(a)
  return a
}

function removeElementFromBeginningOfArray(a, e) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a, e) {
  a.pop(e)
  return a
}

function removeElementFromEndOfArray(a, e) {
  return a.slice(0, a.length - 1)
}
