var chocolateBars = ["snickers","hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(array,element){
  var newArray = array;
  newArray = [element, ...newArray]
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array,element){
  var newArray = array;
  newArray.unshift(element)
  return newArray;
}


function addElementToEndOfArray(array,element){
  newArray = array;
  newArray = [...newArray ,element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array,element){
  newArray = array;
  newArray.push(element);
  return newArray;
}



function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(1);
  return array;
}
function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1)
  return newArray;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;

}
function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length-1)
  return newArray;
}
