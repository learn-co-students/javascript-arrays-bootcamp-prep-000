chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a,b){
  return a = [b, ...a];
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b);
  return a
}

function addElementToEndOfArray(a,b){
  return a = [...a, b];
}

function destructivelyAddElementToEndOfArray(a,b){
  a.push(b);
  return a
}

function accessElementInArray(array,index){
  return(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(J){
  J = J.slice(1);
  return J
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(jeff){
  jeff = jeff.slice(0, jeff.length-1);
  return jeff
}
