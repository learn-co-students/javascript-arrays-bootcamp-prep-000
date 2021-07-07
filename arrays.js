var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift('foo')
  return array
}

function addElementToBeginningOfArray(array, element){
  const newarray = ["foo",...array]
  return newarray
}

function addElementToEndOfArray(array, element){
  const newarray = [...array,"foo"]
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo')
  return array
}

function accessElementInArray(array, index){
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array
}
