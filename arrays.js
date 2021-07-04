var chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');

function addElementToBeginningOfArray(array, element){
  var array = [1];
  var element = "foo";
  array = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
  return array;
  }

function addElementToEndOfArray(array, element){
  var array = [1];
  var element = "foo";
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  var array = [1, 2, 3];
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
array.shift();
return array;
}

function removeElementFromBeginningOfArray(array){
  var array = [1, 2, 3];
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1);
  return array;
}
