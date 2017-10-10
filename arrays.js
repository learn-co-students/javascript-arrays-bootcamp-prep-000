var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  array_new = array;
  array_new.unshift(element);
  return array_new;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;

}

function addElementToEndOfArray(array, element){
  array_new = array;
  array_new.push(element);
  return array_new;
}

function destructivelyAddElementToEndOfArray(array,element){
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
  arr = array.slice(1);
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  arr2 = array.slice(0,array.length -1);
  return arr2;
}
