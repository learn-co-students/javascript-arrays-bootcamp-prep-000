//arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles":
var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];
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
=======
>>>>>>> e7d529bffb1030eb47327f2270f5cb30ef266174
}
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
<<<<<<< HEAD
