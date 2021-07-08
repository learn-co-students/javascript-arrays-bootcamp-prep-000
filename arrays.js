var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray (array, addElement){
  var newArray = [`${addElement}`, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, addElement){
  array.unshift(`${addElement}`);
  var newArray = array.slice();
  return newArray;
}


function addElementToEndOfArray(array, addElement){
  var newArray = [...array,`${addElement}`];
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, addElement){
  array.push(`${addElement}`);
  var newArray = array.slice();
  return newArray;
}

function accessElementInArray (array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  var newArray = array.slice();
  return newArray;
}

function removeElementFromBeginningOfArray(array){
  var array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  var newArray = array.slice();
  return newArray;
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length-1);
  return newArray;
}
