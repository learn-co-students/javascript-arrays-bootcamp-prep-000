var chocolateBars = ['snickers','hundred grand','kitkat','skittles']


function addElementToBeginningOfArray(array, element){
  array = [element,...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function addElementToEndOfArray(array, element){
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

addElementToBeginningOfArray([1],"one")
destructivelyAddElementToBeginningOfArray([1],"one")

addElementToEndOfArray([2],"two")
destructivelyAddElementToEndOfArray([2],"two")

function accessElementInArray(array,element){
  element = array[element]
  return element
}

accessElementInArray(["Joe","frank","bill","Frankie"],2)

function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
}

removeElementFromBeginningOfArray(["Joe","frank","bill","Frankie"])
