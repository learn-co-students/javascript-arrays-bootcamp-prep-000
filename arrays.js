var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,element){
  //use ...
  var arr1 = [element, ...array];
  return arr1;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  //use unshift
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  var arr1 = [...array, element];
  return arr1;
}

function destructivelyAddElementToEndOfArray(array,element){
  //use push
  array.push(element);
  return array;
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var arr1 = array.slice(1);
  return arr1;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var arr1 = array.slice(0,array.length-1);
  return arr1;
}
