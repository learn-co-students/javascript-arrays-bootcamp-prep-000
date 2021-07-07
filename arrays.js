var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array, e){
  var a = [...array]
  a.unshift(e)
  return a
}

function destructivelyAddElementToBeginningOfArray(array, e){
  array.unshift(e)
  return array
}

function addElementToEndOfArray(array, e){
  var a = [...array]
  a.push(e)
  return a
}

function destructivelyAddElementToEndOfArray(array, e){
  array.push(e)
  return array
}

function accessElementInArray(array, i){
  return array[i]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var a = array
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var a = array
  return a.slice(0,a.length-1)
}
