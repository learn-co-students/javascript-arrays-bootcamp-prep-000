var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  const newArray= ['foo', ...array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift('foo');
  return array
}

function addElementToEndOfArray(array, element){
  const secondArray=[...array, 'foo'];
  return secondArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo');
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  const slicedArray=array.slice(1);
  return slicedArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  const smallArray=array.slice(0, array.length-1);
  return smallArray;
  
}