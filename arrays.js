var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array,element) {
  array[1] = element
  return array
}

function accessElementInArray(array,index) {
  return (array[index])
}

function addElementToBeginningOfArray(array,element) {
  array = [element, ...array]
  return array
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
