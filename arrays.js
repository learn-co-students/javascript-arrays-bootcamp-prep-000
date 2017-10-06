var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var output = [element, ...array];
  return output;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
}

function addElementToEndOfArray(array, element){
  var output = [array..., element];
  return output;
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  return array.push(element);
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  var output = array.slice(1);
  return output;
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}


function removeElementFromEndOfArray(array){
  var output = array.slice(0, array.length-1);
  return output;
}
