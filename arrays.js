var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arrayName,element){
 return [element,...arrayName];
}

function destructivelyAddElementToBeginningOfArray(arrayName,element){
  arrayName.unshift(element);
  return arrayName;
}
function addElementToEndOfArray(arrayName,element){
  return [...arrayName,element];
}
function destructivelyAddElementToEndOfArray(arrayName,element){
  arrayName.push(element);
  return arrayName;
}

function accessElementInArray(arrayName,index){
  return arrayName[index];
}

function destructivelyRemoveElementFromBeginningOfArray (arrayName){
  arrayName.shift();
  return arrayName;
}

function removeElementFromBeginningOfArray(arrayName){
  return arrayName.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arrayName){
   arrayName.pop();
   return arrayName;
}

function removeElementFromEndOfArray(arrayName){
  return arrayName.slice(0,arrayName.length - 1);
}