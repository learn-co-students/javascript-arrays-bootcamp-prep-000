var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array , element){
  nk = [element, ...array]
  return nk

}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  ne = [...array, element]
  return ne
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
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
  va = array.slice(1);
  return va
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  k = array.slice(0, array.length - 1)
  return k
}
