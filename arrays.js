var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, newValue) {
  var newArray = [newValue, ...a]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(a, newValue) {
  a.unshift(newValue)
  return a;
}

function addElementToEndOfArray(a, newValue) {
  var newArray = [...a, newValue]
  return newArray;
}

function destructivelyAddElementToEndOfArray(a, newValue) {
  a.push(newValue)
  return a;
}

function accessElementInArray(a, i) {
  return a[i];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift()
  return a;
}

function removeElementFromBeginningOfArray(a) {
  var newArray = a.slice(1)
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop()
  return a;
}

function removeElementFromEndOfArray(a) {
  var newArray = a.slice(0, a.length - 1)
  return newArray;
}
