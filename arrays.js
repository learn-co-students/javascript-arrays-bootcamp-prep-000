var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, el){
  return [el, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array.unshift(el)
  return array
}

function addElementToEndOfArray(array, el){
  return [...array, el]
}

function destructivelyAddElementToEndOfArray(array, el){
  array.push(el)
  return array
}

function accessElementInArray(array, index){
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)

}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)

}
