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
