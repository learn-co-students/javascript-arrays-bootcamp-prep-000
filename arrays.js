var chocolateBars = [
  'snickers',  
  'hundred grand',  
  'kitkat',
  'skittles'];
  
  function addElementToBeginningOfArray(){
  const array = [1];
  const newArray = ['foo', ...(array)];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array = [1]){
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray(){
  const array = [1];
  const newArray = [...array, "foo"];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array = [1]){
  array.push('foo');
  return array;
}

function accessElementInArray(){
  var array = [1, 2, 3];
  return (array[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(array = [1, 2, 3]){
  array.shift();
  return array;
  }

function removeElementFromBeginningOfArray(){
  var array = [1, 2, 3];
  array1 = array.slice(1);
  return array1;
}

function destructivelyRemoveElementFromEndOfArray(array = [1, 2, 3]){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(){
  const array = [1, 2, 3];
  array1 = array.pop();
  return array;
}
