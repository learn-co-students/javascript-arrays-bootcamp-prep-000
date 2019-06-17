var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {

  array = [element,... array]
  return array
}

addElementToBeginningOfArray(chocolateBars,"Mars")

function destructivelyAddElementToBeginningOfArray(array, element) {

  array.unshift(element)
  return array
}

destructivelyAddElementToBeginningOfArray(chocolateBars,"Togo");

function addElementToEndOfArray(array, element) {

  array = [...array, element]
  return array
}

addElementToEndOfArray(chocolateBars,"MMs")

function destructivelyAddElementToEndOfArray(array, element) {

  array.push(element)
  return array
}

destructivelyAddElementToEndOfArray(chocolateBars,"Twix")

function accessElementInArray(array, index){

  return (array[index])
}

accessElementInArray(chocolateBars, 3)

function destructivelyRemoveElementFromBeginningOfArray(array) {

  array.shift()
  return array
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

function removeElementFromBeginningOfArray(array){

  array = array.slice(1)
  return array
}

removeElementFromBeginningOfArray(chocolateBars)

function destructivelyRemoveElementFromEndOfArray(array){

  array.pop()
  return array
}

destructivelyRemoveElementFromEndOfArray(chocolateBars)

function removeElementFromEndOfArray(array){

  array.slice(0, array.length -1)
  return array

}

removeElementFromEndOfArray(chocolateBars)
