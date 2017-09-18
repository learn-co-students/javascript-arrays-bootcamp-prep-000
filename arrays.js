var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array1,stringElement){
  return [stringElement, ...array1]
}

function destructivelyAddElementToBeginningOfArray(array1,stringElement){
  array1.unshift(stringElement)
  return array1
}

function addElementToEndOfArray(array1,stringElement){
  return [...array1, stringElement]
}

function destructivelyAddElementToEndOfArray(array1,stringElement){
  array1.push(stringElement)
  return array1
}

function accessElementInArray(array1,indexNumber){
  return array1[indexNumber]
}

function destructivelyRemoveElementFromBeginningOfArray(array1){
  array1.shift()
  return array1
}

function removeElementFromBeginningOfArray(array1){
  return array1.slice(1)
}

removeElementFromBeginningOfArray(chocolateBars)

function destructivelyRemoveElementFromEndOfArray (array1){
  array1.pop()
  return array1
}

function removeElementFromEndOfArray (array1){
  return array1.slice(0, array1.length - 1)
}
