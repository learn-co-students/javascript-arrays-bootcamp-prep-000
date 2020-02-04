var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'kitkat'];

function addElementToBeginningOfArray(A, element){
  return [element, ... A]
}

function destructivelyAddElementToBeginningOfArray(A, element){
  A.unshift(element)
  return A
}

function addElementToEndOfArray(A, element){
  return [... A, element]
}

function destructivelyAddElementToEndOfArray(A, element){
  A.push(element)
  return A
}

function accessElementInArray(A, index){
  return A[index]
}

function destructivelyRemoveElementFromBeginningOfArray(A) {
  A.shift()
  return A
}

function removeElementFromBeginningOfArray(A){
  return A.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(A){
  A.pop()
  return A
}

function removeElementFromEndOfArray(A){
  return A.slice(0, -1)
}


