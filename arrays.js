var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(array,element){
  var myArray = [array];
  myArray = [element, ...array];
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  var myArray = [array];
  myArray = [...array, element];
  return myArray;
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

function accessElementInArray(array,index){
  var returnElement = array;
  return returnElement[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  sliceArray = array.slice(1);
  return sliceArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var removeElement = array.slice(0,-1)
  return removeElement
}





