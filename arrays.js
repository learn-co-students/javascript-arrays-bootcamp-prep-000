var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array1, element) {
  var array2 = [element, ...array1]
  return(array2)
}
function destructivelyAddElementToBeginningOfArray(array1, element) {
    array1.unshift(element)
    //array1 = [element, ...array1]
    return(array1)
}
function addElementToEndOfArray(array1, element) {
  var array2 = [...array1, element]
  return(array2)
}
function destructivelyAddElementToEndOfArray(array1, element) {
    array1.push(element)
    //array1 = [element, ...array1]
    return(array1)
}
function accessElementInArray (array1, n) {
  return(array1[n])
}
function destructivelyRemoveElementFromBeginningOfArray (array1) {
  array1.shift()
  return(array1)
}
function removeElementFromBeginningOfArray (array1) {
  var array2 = array1.slice(1)
  return(array2)
}
function destructivelyRemoveElementFromEndOfArray (array1) {
  array1.length = array1.length - 1
/*  array1.pop() */
  return(array1)
}

function removeElementFromEndOfArray (array1) {
  var array2 = array1.slice(0, array1.length-1)
  return (array2)
}