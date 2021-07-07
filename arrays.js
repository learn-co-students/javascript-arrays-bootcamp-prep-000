var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray.unshift(element);
  return newArray
}


function destructivelyAddElementToBeginingOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  var newArray = array;
  newArray.push(element);
  return newArray;
}


function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accesselementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}


