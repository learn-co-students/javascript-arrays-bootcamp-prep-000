var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToBeginningOfArray(array, element){
  return ['foo', 1]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

function addElementToEndOfArray(array, element){
  return [array, ...element]
}

function addElementToEndOfArray(array, element){
  return [1, 'foo']
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element);
return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array){
array.slice(0, array.length - 1);
return array
}

function removeElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function removeElementFromEndOfArray(array){
return array.slice(0, array.length -1);
}
