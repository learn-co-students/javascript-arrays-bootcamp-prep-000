var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arrays, element){
var newArray = [element, ...arrays]
return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element){
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray (array, element){
array.push(element)
return array
}

function accessElementInArray (array, index){
  var array = array;
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array

}

function removeElementFromBeginningOfArray (array){
  var newArray = array
  return newArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop();
  return array
}

function removeElementFromEndOfArray (array){
  var newArray = array.slice(0, array.length - 1);
  return newArray
}
