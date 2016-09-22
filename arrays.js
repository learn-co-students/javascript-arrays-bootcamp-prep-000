var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (myArray, element) {
newArray = [element, ...myArray]
return newArray
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  myArray.unshift(element)
  return myArray
}

function addElementToEndOfArray (myArray, element) {
newArray = [...myArray, element]
return newArray
}

function destructivelyAddElementToEndOfArray (myArray, element) {
myArray.push(element)
return myArray
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
}

function removeElementFromBeginningOfArray (array) {
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  newArray = array.slice(0, array.length - 1)
return newArray
}
