var chocolateBars=['snickers','hundred grand','kitkat','skittles'];
function destructivelyAddElementToBeginningOfArray(array,item){
  array.unshift(item)
return array
  
}
function addElementToBeginningOfArray(array,item){
array2=[item,...array]
return array2
}
function addElementToEndOfArray(array,item){
  array2=[...array,item]
  return array2
}
function destructivelyAddElementToEndOfArray(array,item){
  array.push(item)
  return array
}
function accessElementInArray(array,int){
  return array[int]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop()
return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}