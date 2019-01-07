var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function removeElementFromEndOfArray(array){
 return array.slice(0, array.length - 1)}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array}
function addElementToBeginningOfArray(ar, element){
  return [element, ...ar]}
function destructivelyAddElementToBeginningOfArray(ar, el){
  ar.unshift(el)
  return ar}
function addElementToEndOfArray(array, element){
  return [...array, element]}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array}
function accessElementInArray(array, index){
  return array[index]}
function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift()
 return array}
function removeElementFromBeginningOfArray(array){
 var ar = array
 return ar.slice(1)}

