var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

/*???adds an element to the beginning of an array:???*/
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return(array)
}

function addElementToEndOfArray(array, index) {
  return [...array, index]
}

/*???adds an element to the end of an array???*/
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return(array)
}

function accessElementInArray(array, element){
  return(array[element])
}

/*returns the array with the first element removed*/
function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.shift()
  return(array)
}

function removeElementFromBeginningOfArray(array,element){
  return array.slice(1)
}

/*returns the array with the last element removed*/
function destructivelyRemoveElementFromEndOfArray(array,element){
  array.pop()
  return(array)
}

function removeElementFromEndOfArray(array,element){
  return(array.slice(0, array.length - 1))
}
