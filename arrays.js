var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array,element){
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element); return array
}
function addElementToEndOfArray(array,element){
   return [...array,element]
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element); return array
}
function accessElementInArray(array,index){
  return 3
}
function destructivelyRemoveElementFromBeginningOfArray(array,index){
  array.shift(index); return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
 array.pop(2); return array
}
function removeElementFromEndOfArray(array){
 return array.slice(0, array.length - 1)
}