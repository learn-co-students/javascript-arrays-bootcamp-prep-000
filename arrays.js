var chocolateBars = ["hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(a, b){
  c = [b, ...a]
  return c
}

function destructivelyAddElementToBeginningOfArray(a,b){
  //a[0]=b;
  a.unshift(b);
  return a
}

function addElementToEndOfArray(a, b){
  c = [...a,b];
  return c
}

function destructivelyAddElementToEndOfArray(a,b){
  a.push(b);
  return a
}

function accessElementInArray(a,b){
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a
}

function removeElementFromBeginningOfArray(a){
  c = a.slice(1)
  //a.shift();
  return c
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop();
  return a
}

function removeElementFromEndOfArray(a){
  c = a.slice(0,a.length-1);
  return c
}