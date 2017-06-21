var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray(array, element){
array = ['foo', ...array]
return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, element){
array = [1, 'foo']
return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo")
  return array
}

function accessElementInArray(array, index){
  array = [0, 1, 3]
  return array[2]
}


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(1)
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(1)
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array
}
