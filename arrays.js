var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];



function addElementToBeginningOfArray(m,n){
  var array = [n,...m];
  return array;
}

function destructivelyAddElementToBeginningOfArray(m,n){
  m.unshift(n);
  return m;
}

function addElementToEndOfArray(m,n){
  var array = [...m,n];
  return array;
}

function destructivelyAddElementToEndOfArray(m,n){
  m.push(n);
  return m;
}

function accessElementInArray(m,n){
  return m[n];
}

function destructivelyRemoveElementFromBeginningOfArray(m){
  m.shift();
  return m;
}

function removeElementFromBeginningOfArray(m){
  return m.slice(1);
}


function destructivelyRemoveElementFromEndOfArray(m){
  m.pop();
  return m;
}

function removeElementFromEndOfArray(m){
  return m.slice(0,-1);
}
