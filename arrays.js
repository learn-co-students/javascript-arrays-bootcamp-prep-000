var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
  const arrays = ['foo', ...array];
  return arrays;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray(array, element){
  const arrays = [...array, 'foo'];
  return arrays;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo');
  return array;
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,(array.length - 1));
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}