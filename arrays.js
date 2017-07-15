var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]

///this function add an element at the beginning an erray
function addElementToBeginningOfArray(array, element){

  var newArray = array
  array.unshift(element)
  return newArray
}
//this function removes an element at the beginning of an array
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
//this function adds an element at the end of and array
function addElementToEndOfArray (array, element){
  var newArray = array
  newArray.push(element)
  return newArray
}
//this function removes an element at the end of a array
function  destructivelyAddElementToEndOfArray(array, element){
  array[array.length] = element
  return array
}
//access element using its index
function accessElementInArray(array, index){
return array[parseInt(index)]
}
//destroy an element
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1, array.length)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length-1)
  return newArray
}
