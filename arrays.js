var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element){
  var arra = array.slice()
  arra.unshift(element)
  return arra

  
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array

  
}

function addElementToEndOfArray(array, element) {
  var arr = array.slice()
  arr.push(element)
  return arr
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function removeElementFromEndOfArray(array){
  var arr = array.slice();
  arr.pop()
  return arr
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var arr= array.slice();
  arr.shift()
  return arr
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
