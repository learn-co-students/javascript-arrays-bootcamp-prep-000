 var chocolateBars = ["snickers",
"hundred grand",
"kitkat",
"skittles"];

function addElementToBeginningOfArray (array, element){
  var newArray = [element,...array];
  return newArray;
};

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
};

function addElementToEndOfArray (array, element){
  var newArray = [...array, element];
  return newArray;
};

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
};

function accessElementInArray(){
  var array = [0,1,2,3];
  return array[3];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.unshift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
};
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
  return array;
};

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
  
}
