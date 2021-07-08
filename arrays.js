var chocolateBars = ['snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var newArray = chocolateBars;

function addElementToBeginningOfArray(array, element){
  var arrayB = array.slice(0);
  arrayB.unshift(element);
  return arrayB;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var arrayB = array.slice(0);
  arrayB.push(element);
  return arrayB;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
  }


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(0);
  return array;
}

function removeElementFromBeginningOfArray(array){
  arrayB = array.slice(1);
  return arrayB;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var arrayB = array.slice(0, array.length -1);
  return arrayB;
}

