var chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');
function addElementToBeginningOfArray(ray, element){
  var newray = ray;
  newray.unshift(element);
  return newray;
}
function destructivelyAddElementToBeginningOfArray(ray, element){
  ray.unshift(element);
  return ray;
}

function addElementToEndOfArray(ray, element){
  var newray = ray;
  newray.push(element);
  return newray;
}

function destructivelyAddElementToEndOfArray(ray, element){
  ray.push(element);
  return ray;
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
  var newarray = array.pop();
  return newarray;
}

function removeElementFromEndOfArray(array){
  var newarray = array.slice(0, array.length - 1);
  return newarray
}
