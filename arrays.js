var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  // add elemetn to beginning of array
  //return new array, but do not alter original array
  var newArray = [element, ...array]
  return newArray;
}



function destructivelyAddElementToBeginningOfArray(array, element) {
  // add elemetn to beginning of array
  // return new array, mutates original array
  array.unshift(element)
  return array;
}

function accessElementInArray(array, index) {
/*The function should accept an array and an index
  and return the element at that index.*/
  return array[index]
}

function addElementToEndOfArray(array, element) {
  //add element to end of array, do not change original array
  //return new array?
  var addBeginning = [...array, element]
  return addBeginning;
}

function destructivelyAddElementToEndOfArray(array, element) {
  //add element to end of array, changing array
  //return array?
  array.push(element)
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  //remove element from beginning of array, return changed array
  array.shift(element)
  return array;
}

function removeElementFromBeginningOfArray(array) {
  // 1 argument = array
  //remove element from beginning of array, return array
  //do not change original array
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  //remove last element of array, return mutated array
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array) {
  //remove last element of array, do not mutate original array
  return array.slice(0, array.length - 1);
}
