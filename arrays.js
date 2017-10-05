var chocolateBars = ['snickers',
'hundred grand',
'kitkat',
'skittles'];

function addElementToBeginningOfArray(array, newval){
  var newarray = [newval, ...array]
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, newval){
  array.unshift(newval);
  return array;
}

function addElementToEndOfArray(array, newval){
  var newarray = [...array, newval];
  return newarray;
}

function destructivelyAddElementToEndOfArray(array, newval){
  array.push(newval);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var newarray = array.slice(1);
  return newarray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  newarray = array.slice(0, array.length - 1)
  return newarray;
}
