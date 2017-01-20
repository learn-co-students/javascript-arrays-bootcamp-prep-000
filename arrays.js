chocolateBars = ['snickers','hundred grand', 'kitkat', 'and skittles']
function addElementToBeginningOfArray (array, ele){
  Newarray = [ele, ...array];
  return Newarray    
}

function destructivelyAddElementToBeginningOfArray(array, ele){
  array.unshift(ele);
  return array;
}

function addElementToEndOfArray (array, ele){
  newArray = [...array, ele];
  return newArray    
} 

function destructivelyAddElementToEndOfArray(array, ele){
  array.push(ele);
  return array;
}

function accessElementInArray (array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1);
  return newArray;
}

function removeElementFromEndOfArray(array){ 
  newArray = array;
  newArray.pop();
  return newArray;
}

