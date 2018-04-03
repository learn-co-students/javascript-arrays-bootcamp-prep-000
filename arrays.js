var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element){
  modified_array=[element,...array]
  return modified_array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function addElementToEndOfArray(array, element){
  modified_array=[...array, element]
  return modified_array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
