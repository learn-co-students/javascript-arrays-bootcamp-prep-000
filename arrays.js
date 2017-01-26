var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray() {
  var aArray = [1]
  return ['foo', ...aArray]

}

function destructivelyAddElementToBeginningOfArray() {
  var bArray = [1]
bArray.unshift('foo')
  return bArray
}

function addElementToEndOfArray() {
  var cArray = [1]
  return [...cArray, 'foo']
}

function destructivelyAddElementToEndOfArray() {
  var dArray = [1]
dArray.push('foo')
  return dArray
}

function accessElementInArray() {
  var eArray = [1, 2, 3]
  return eArray[2]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  var fArray = [1, 2, 3]
  fArray.shift(1)
  return fArray
}

function removeElementFromBeginningOfArray() {
  var gArray = [1, 2, 3]
  gArray = gArray.slice(1)

  return gArray
}

function removeElementFromEndOfArray() {
  var hArray = [1, 2, 3]
  hArray = hArray.slice(0, hArray.length - 1)
  return hArray
}
