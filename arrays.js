var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles']

function addElementToBeginningOfArray(array, add){
return([add, ...array])
}

//Still working on
function destructivelyAddElementToBeginningOfArray(array, add) {
  array.unshift(add)
  return(array)
}

function addElementToEndOfArray(array, add){
  return([...array, add])
}

function destructivelyAddElementToEndOfArray(array, add){
  array.push(add)
  return(array)
}

function accessElementInArray(array,index){
  return(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return(array.shift())
}

function removeElementFromBeginningOfArray(array){
  return(array.slice(1))
}

function removeElementFromEndOfArray(array){
  return(array.slice(0,array.length-1))
}
