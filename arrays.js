var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element),array
}

function addElementToEndOfArray(array, element){
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element),array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift(),array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop(),array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}
