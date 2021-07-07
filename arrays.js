var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, b){
  var temp = [b, ...a];
  return temp;
}

function destructivelyAddElementToBeginningOfArray(a, b){
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a, b){
  var temp = [...a, b];
  return temp;
}

function destructivelyAddElementToEndOfArray(a, b){
  a.push(b);
  return a;
}

function accessElementInArray(a, i){
  return a[i];
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a){
 return a.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(a){
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a){
  return a.slice(0, a.length - 1);
}
