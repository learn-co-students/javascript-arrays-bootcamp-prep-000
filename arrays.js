var chocolateBars = ['snickers','hundred grand','kitkat','skittles']


function addElementToBeginningOfArray(array, element){
  var arr = [element, ...array]
  return arr
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}


function addElementToEndOfArray(array, element){
  var arr = [...array,element]
    return arr
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

function accessElementInArray(array, index){
  return array[index]
}


function removeElementFromBeginningOfArray(array){
    array.shift()
    return array
}


function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
