var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var myArray = [element, ...array]
return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  var myArray = [...array, element]
  return myArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
    array.shift(element);
    return array
}


function removeElementFromBeginningOfArray(array, element){
    return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array, element){
    array.pop(element);
    return array
}


function  removeElementFromEndOfArray(array, element){
  return array.slice(0, length - 1)
}
