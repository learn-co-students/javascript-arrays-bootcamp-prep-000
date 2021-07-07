var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element){
  
    const ar = [element, ...array]
    return ar;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  array.unshift(element);
    return array;
}

function addElementToEndOfArray(array, element){
  const ar = [...array, element]
  return ar;
  
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
} 

function accessElementInArray(array, index){
  return array[index];
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift();
 return array;
}

function removeElementFromBeginningOfArray(array){
  var ar = array.slice(1);
  return ar;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  var ar = array.slice(0, array.length - 1);
  return ar ;
  
}