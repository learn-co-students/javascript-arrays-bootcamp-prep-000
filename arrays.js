chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array2 = [element,...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array2 =[array,...element]
  return array2
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
}


