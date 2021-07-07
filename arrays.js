var chocolateBars = ["snikers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return ["foo",...array,];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, "foo"];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo");
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift("foo");
  return array;
}

function removeElementFromBeginningOfArray(array, element){
  array=array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
 return array.slice(0, array.length - 1);
}

