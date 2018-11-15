var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']

function addElementToBeginningOfArray(array, element){
  var array = [1];
  var array = ['foo', ...array];
  return array
}

addElementToBeginningOfArray(array, element);

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array
}

destructivelyAddElementToBeginningOfArray(array, element);

function addElementToEndOfArray(array, element) {
  var array = [...array, 'foo'];
  return array
}

addElementToEndOfArray(array, element);

function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo');
  return array
}

destructivelyAddElementToEndOfArray(array, element);

function accessElementInArray(array, element){
  var array = [1, 2, 3];
 return (array[2])
}

accessElementInArray(array, element);

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

destructivelyRemoveElementFromBeginningOfArray(array);

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
  }

removeElementFromBeginningOfArray(array);

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

destructivelyRemoveElementFromEndOfArray(array);

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

removeElementFromEndOfArray(array);
