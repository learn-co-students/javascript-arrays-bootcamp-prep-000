var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//function addElementToBeginningOfArray(array, element){return(array.unshift(element))}
function addElementToBeginningOfArray(array, element){
array.unshift(element)
return array}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
return array}
function addElementToEndOfArray(array,element){
  array.push(element)
  return array}
function destructivelyAddElementToEndOfArray(array,element){
  array[array.length] = element
  return array}
function accessElementInArray(array, index){return(array[index])}
function destructivelyRemoveElementFromEndOfArray(array){array.pop(); return array}
function destructivelyRemoveElementFromBeginningOfArray(array){array.shift(); return array}
function removeElementFromBeginningOfArray(array){return(array.slice(1))}
function removeElementFromEndOfArray(array){return(array.slice(0,array.length-1))}
