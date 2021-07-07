var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(a, b){
  return [b, ...a]
}
function destructivelyAddElementToBeginningOfArray(a, b){
  a.unshift(b)
  return a
}
function addElementToEndOfArray(a, b){
  return [...a, b]
}
function destructivelyAddElementToEndOfArray(a, b){
  a.push(b)
  return a
}
function accessElementInArray(c, d){
  return c[d]
}
function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift()
  return a
}
function removeElementFromBeginningOfArray(a){
  var a = a.slice(1)
  return a
}
function destructivelyRemoveElementFromEndOfArray(a){
  a.pop()
  return a
}
function removeElementFromEndOfArray(a){
  var a = a.slice(0, a.length - 1)
  return a
}