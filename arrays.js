var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(Arr,toAdd){
  return [toAdd,...Arr];
}

function destructivelyAddElementToBeginningOfArray(Arr,toAdd){
  Arr.unshift(toAdd);
  return Arr;
}

function addElementToEndOfArray(Arr,toAdd){
  return [...Arr,toAdd];

}
function destructivelyAddElementToEndOfArray(Arr,toAdd){
  Arr.push(toAdd);
  return Arr;
}

function accessElementInArray(Arr,index){
  return Arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(Arr){
  Arr.shift();
  return Arr;
}

function removeElementFromBeginningOfArray(Arr){
   return Arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(Arr){
  Arr.pop();
  return Arr;
}

function removeElementFromEndOfArray(Arr){
  return Arr.slice(0,Arr.length-1);
}
