var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

//chocolateBars.unshift('foo')
//chocolateBars.push(1)
function addElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
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
function accessElementInArray(array, element){
  return array[2]
}
function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
