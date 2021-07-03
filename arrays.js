var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return array = [element, ...array]
}

addElementToBeginningOfArray(chocolateBars, "hershey")

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "candy")

function addElementToEndOfArray (array, element){
  return array = [...array, element]
}

addElementToEndOfArray(array, "bars")

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

destructivelyAddElementToEndOfArray(chocolateBars, "payDay")

function accessElementInArray(array, index){
  return array[index]
}

acessElementInArray(chocolateBars, 2)

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

removeElementFromBeginningOfArray(chocolateBars)

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

destructivelyRemoveElementFromEndOfArray(array)

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

removeElementFromEndOfArray(chocolateBars)
