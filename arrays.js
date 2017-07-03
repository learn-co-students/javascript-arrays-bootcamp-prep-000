chocolateBars=['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray(array,element){
  soln=[element,...array]
  return soln
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element){
  soln=array.slice(0)
  soln.push(element)
  return soln
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
