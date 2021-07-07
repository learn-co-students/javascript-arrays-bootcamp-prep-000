var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  var array = "foo";
  var element = 1;
  var newArray = [array, element];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = [1, "foo"];
  [...newArray, 1, "foo"];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  newArray = [0,1,2,3];
  return newArray[3];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
  newArray = [1,2,3];
  newArray = newArray.slice(0, newArray.length -1);
  return newArray;
}
