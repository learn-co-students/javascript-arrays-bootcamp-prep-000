var chocolateBars = ["chocolateBars", "snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;

}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  //should not mutate
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  //should mutate
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array){
  array.splice(-1);
  return array;
  //return array.slice(0, array.length -1);
  //array.pop();
  //return array;
}
