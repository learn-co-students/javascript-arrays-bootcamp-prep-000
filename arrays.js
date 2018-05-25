var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}
//Doesnt work the code
function destructivelyAddElementToBeginningOfArray(array, element){
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
   return [...array,element]
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.unshift()
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.shift()
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}