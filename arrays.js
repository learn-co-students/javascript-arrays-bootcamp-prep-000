var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
var array = []
function addElementToBeginningOfArray(array, element) {
  array[0]= element
console.log(array)
array.push(element)
console.log(array)
  
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array[0] = element
  console.log(array)
  array.unshift(element)
  console.log(array)
}
function addElementToEndOfArray(array,element){
  array[array.length-1] = element
}
function destructivelyAddElementToEndOfArray(array,element){
  
}
function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array.unshift()
  return array
}
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length-1)
  return array
}
