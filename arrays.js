var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]

function addElementToBeginningOfArray(array, element) {
  return ('addElementToBeginningOfArray', ["foo", + 1])
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return ('addElementToEndOfArray', [1, "foo"])
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return ('destructivelyAddElementToEndOfArray', [1, "foo"])
}

function accessElementInArray(array, index) {
  console.log(accessElementInArray[3])
  return (3)
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1)
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array.slice(1)
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop(3)
    return [1,2]
  }
  
  function removeElementFromEndOfArray(array) {
    chocolateBars.pop(3)
    chocolateBars
    return [1,2]
    }
  