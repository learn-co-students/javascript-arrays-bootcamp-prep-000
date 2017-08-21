var chocolateBars = ['snickers','hundred grand', 'kitkat','skittles'];
//From End
function addElementToEndOfArray(array, element){return  [element,...array]}
function destructivelyAddElementToEndOfArray(array, element){
  array.push=(element)
  return array}
//Remove
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array}
function removeElementFromEndOfArray(array){return array.slice(0,array.length-1)}
//From Beggining
function addElementToBeginningOfArray(array, element){return [...array,element]}
function destructivelyAddElementToBeginningOfArrayElementT(array, element){
  array.unshift(element)
  return array}
//Remove
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array}
function removeElementFromBeginningOfArray(array){return array.slice(1)}
//From Middle
function accessElementInArray(array,num){return array[num]}
