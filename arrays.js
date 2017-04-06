/*var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array,element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)

  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray
}

function destructivelyAddElementToEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0,array.length - 1)
  return newArray
}*/

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


 function addElementToBeginningOfArray(array, element) {
   return [element, ...array]
 }

 function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element)
    return array
  }

 function descructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)

   return array
 }

  function addElementToEndOfArray(array, element) {
    return [...array, element]
  }

 function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element)

   return array
 }

 function accessElementInArray(array, index) {
   return array[index]
 }

 function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift()

   return array
 }

 function removeElementFromBeginningOfArray(array) {
   return array.slice(1)
 }

 function removeElementFromEndOfArray(array) {
   var newArray = array.slice(0,array.length - 1)
   return newArray
 }

 function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
 }
