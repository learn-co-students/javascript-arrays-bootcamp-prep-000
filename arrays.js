var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(a,b) {
  var newArray = [ b , ...a ]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(a,b) {
  var newArray = a
  a.unshift(b)
  return newArray
}

function addElementToEndOfArray(a,b) {
  var newArray = [ ...a , b]
  return newArray
}

function destructivelyAddElementToEndOfArray(a,b) {
  var newArray = a
  a.push(b)
  return newArray
}

function accessElementInArray(array,element) {
  var array = [1,2,3]
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  var array = a
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a) {
  var array = a
  a.pop()
  return array
}

function removeElementFromEndOfArray(a) {
  return a.slice(0 , a.length - 1)
}
