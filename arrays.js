var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ]

function addElementToBeginningOfArray(a,e) {
  var a = [1]
  var b = [e,...a]
  return b
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  var a = [1]
  var a = [e,...a]
  return a
}

function addElementToEndOfArray(a,e) {
  var a = [1,2]
  var b = [...a,e]
  return b
}

function destructivelyAddElementToEndOfArray(a,e) {
  var a = [1,2]
  a = [...a,e]
  return a
}
