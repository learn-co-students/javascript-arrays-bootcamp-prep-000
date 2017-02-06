var chocolateBars = [
  'snickers','hundred grand','kitkat', 'skittles'
]

function addElementToBeginningOfArray(array,element){
  return[element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
var array1=array
  array1.unshift(element)
  return array1;
}

function addElementToEndOfArray(array,element){
  return[...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  var array1=array
    array1.push(element)
    return array1;
  }

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
var array1=array
  array1.shift()
  return array1;
}

function removeElementFromBeginningOfArray(array){
  var array1=array.slice(1)
  return array1;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
  var array1=array.slice(0,array.length-1)
  return array1;
}
