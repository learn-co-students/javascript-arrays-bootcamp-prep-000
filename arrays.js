
var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles']
function addElementToBeginningOfArray(ar, element) {
  ar=[element,...ar]
  return ar
}
function destructivelyAddElementToBeginningOfArray(ar,el) {
  ar.unshift(el)
  return ar
}
function addElementToEndOfArray(array, element) {
  array=[...array, element]
  return array
}
function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
  }
function accessElementInArray(array, index) {
  console.log(array[index])
  return array[index]
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
  }
function removeElementFromEndOfArray(array) {
   array=array.slice(0,array.length-1)
   return array
}
