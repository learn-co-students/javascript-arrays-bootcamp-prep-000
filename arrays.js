var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  //return myNewArray;
  }

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
  }

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array;
    }

function accessElementInArray(array, index) {
  return array[index];
}

 function destructivelyRemoveElementFromBeginningOfArray(array) {
   array = array.shift()
   return array;
 }

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.pop()
  return array;
}

function removeElementFromEndOfArray(array) {
  var removedArray = array.slice(0, (array.length - 1))
  return removedArray;
}
