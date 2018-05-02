var chocolateBars= ['snickers','hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array,element){
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array 
}

function addElementToEndOfArray(array,element){
  return[...array,element]
}
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray(array,index){
  array [1,2,3]
  return 3
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
 
}
function removeElementFromBeginningOfArray(array){
  return array.slice(-2)
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1)
}
