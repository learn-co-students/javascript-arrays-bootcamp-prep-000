var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

+function addElementToBeginningOfArray(array, element){
 +  var new_array = [element, array[0]]
 +  return new_array
 +}
 +
 +function descructivelyAddElementToBeginningOfArray(array, element){
 +  array.unshift(element)
 +  return array
 +}
 +function addElementToEndOfArray(array, element){
 +  array.push(element)
 +  return array
 +}
 +function destructivelyAddElementToEndOfArray(array, element){
 +  array.push(element)
 +  return array
 +}
 +function accessElementInArray(array, index){
 +
 +  return array[2]
 +}
 +function removeElementFromBeginningOfArray(array){
 +  array.shift()
 +  return array
 +}
 +function removeElementFromEndOfArray(array){
 +  array.pop()
 +  return array
 +}
