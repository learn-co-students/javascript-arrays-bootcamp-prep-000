var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arrayOne,element){
  return [element, ...arrayOne];
}

function destructivelyAddElementToBeginningOfArray(arrayOne,element){
  arrayOne.unshift(element);
  return arrayOne;
}
function addElementToEndOfArray(arrayOne, element){
  return [...arrayOne, element];
}
function destructivelyAddElementToEndOfArray(arrayOne, element){
  arrayOne.push(element);
  return arrayOne;
}
function accessElementInArray(arrayOne, index){
  return arrayOne[index];
}
function removeElementFromBeginningOfArray(arrayOne){
  return arrayOne.slice(1);
}
function destructivelyRemoveElementFromBeginningOfArray(arrayOne){
  arrayOne.shift()
  return arrayOne;
}
function destructivelyRemoveElementFromEndOfArray(arrayOne){
  arrayOne.pop();
  return arrayOne
}


function removeElementFromEndOfArray(arrayOne){
    return arrayOne.slice(0, 
    arrayOne.length -1);
    
}

