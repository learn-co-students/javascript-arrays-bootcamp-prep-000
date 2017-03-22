var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element){
  newArray = array
  newArray.push(element)
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
    array.push(element)
    return array;
}
function addElementToBeginningOfArray(array, element){
  myArray = array
  myArray.unshift(element)
  return myArray;
}

function accessElementInArray(array, index){
  var element = array[index]
  return element
}

function removeElementFromBeginningOfArray(array){
  array.splice(0,1)
  return array
}
function removeElementFromEndOfArray(array){
  var last = array.length - 1
  array.splice(last, 1)
  return array
}
