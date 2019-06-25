var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
//'push' and 'unshift' change the underlying array
//in contrast, the 'spread operator' creates a new array in place

function addElementToBeginningOfArray(array, element) {
  var newArray = array
  newArray.unshift(element)
  return array.unshift(element)
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  const newArray = array
  array.unshift(element)
  return newArray
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function addElementToEndOfArray(array, element) {
  var newArray = array
  newArray.push(element)
  return newArray
}

function accessElementInArray(array, index) {
  return array[index]
}

//(Destructive method) 'shift' removes an element from the beginning of an array.It mutates the underlying array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

//'slice' removes the first element from an array without changing the underlying array 
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

//(Destructive method) 'pop' removes an element from the end of an array
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array 
}

//'slice' can be used to remove the last element as well 
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}






