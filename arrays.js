var array = []

var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,x){
  [x, ...array]
  
}


function destructivelyAddElementToBeginningOfArray(array,y){
  array.unshift(y);
  
  
}

function addElementToEndOfArray(array, a){
    [array, ...a]
}

function destructivelyAddElementToEndOfArray(array, z){
  array.push(z);
  
}

function accessElementInArray(array){
  return [0]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift;
}

function removeElementFromEndOfArray(array){
  array.pop;
}

