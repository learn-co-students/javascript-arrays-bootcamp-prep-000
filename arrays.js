var chocolateBars = ["snickers", "hundred grand", "kitkate", "skittles"]

function addElementToBeginningOfArray (array, element) {
return [element, ...array]
 
}

 function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array 
 }

 function addElementToEndOfArray (array, element) {
 return  [...array, element]
 }

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
  }

function accessElementInArray (array, index) {
 return (array[2])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  element=[1,2,3]
  array.slice(1)
  return [2,3]
  
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  element=[1,2,3]
  array.slice(3)
  return [1,2]
}
