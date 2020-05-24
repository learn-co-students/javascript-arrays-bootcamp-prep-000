var chocolateBars= ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array,ny) {
  return [ny,...array]
}
function destructivelyAddElementToBeginningOfArray(array,wc){
  array.unshift(wc)
  return array;
}
function addElementToEndOfArray (array,sc){
  return[...array,sc]
}
function destructivelyAddElementToEndOfArray(array,nc) {
  array.push(nc)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array)  {
  array.pop()
return array
}

function removeElementFromEndOfArray (array){
return array.slice(0,array.length -1)
}

function accessElementInArray (array,index){
  return (array[index])
  
}
