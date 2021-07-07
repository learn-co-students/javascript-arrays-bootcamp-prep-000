var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var newArr = array.slice(0)
  newArr.unshift(element)
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}


function addElementToEndOfArray(array, element){
  var newArr = array.slice(0)
  newArr.push(element)
  return newArr
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArr = array.slice(0)
  newArr.shift()
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newArr = array.slice(0)
  newArr.pop()
  return newArr
}
