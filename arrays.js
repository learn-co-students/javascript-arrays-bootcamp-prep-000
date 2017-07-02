var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(any, bitch) {
  return [bitch, ...any]
}

function destructivelyAddElementToBeginningOfArray(any, bitch) {
  any.unshift(bitch);
  return any;
}

function addElementToEndOfArray(any, bitch) {
  return [...any, bitch]
}

function destructivelyAddElementToEndOfArray(any, bitch) {
  any.push(bitch);
  return any;
}

function accessElementInArray(any, index) {
  return any[index]
}

function destructivelyRemoveElementFromBeginningOfArray(any) {
  any.shift()
  return any
}

function removeElementFromBeginningOfArray(any) {
  var slice = any.slice(1)
  return slice
}

function destructivelyRemoveElementFromEndOfArray(any) {
  any.pop()
  return any
}

function removeElementFromEndOfArray(any) {
  var slice = any.slice(0, any.length - 1)
  return slice
}
