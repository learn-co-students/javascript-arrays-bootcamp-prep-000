var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (Array, name) {
  return [name, ...Array]
}
function destructivelyAddElementToBeginningOfArray (Array, name) {
  Array.unshift(name)
  return Array
}
function addElementToEndOfArray (Array, name) {
  return [...Array, name]
}
function destructivelyAddElementToEndOfArray (Array, name) {
  Array.push(name)
  return Array
}
function accessElementInArray (Array, index) {
return Array[index]
}
function destructivelyRemoveElementFromBeginningOfArray (Array) {
  Array.shift ()
  return Array
}
function removeElementFromBeginningOfArray (Array) {
  return Array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (Array) {
Array.pop()
return Array
}
function removeElementFromEndOfArray (Array) {
  return Array.slice(0,Array.length - 1)
}


