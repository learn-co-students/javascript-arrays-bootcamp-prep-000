var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// chocolateBars.unshift("element");

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

// addElementToBeginningOfArray([1], 'foo');
//
// addElementToBeginningOfArray(array, 'foo')

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  // array.push(element)
  return [...array,element]
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

// const array = [1, 2, 3];
// destructivelyRemoveElementFromBeginningOfArray(array)

function removeElementFromBeginningOfArray(array){
  // array.shift()
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

// const array = [1, 2, 3];
// destructivelyRemoveElementFromEndOfArray(array);

function removeElementFromEndOfArray(array){
  // array.pop()
  return array.slice(0, array.length-1)
}
