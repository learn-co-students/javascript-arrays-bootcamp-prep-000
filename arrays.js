var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function addElementToBeginningOfArray(ary, element){
  return [element,...ary];
}

function destructivelyAddElementToBeginningOfArray(ary, element){
  ary.unshift(element)
  return ary;
}

function addElementToEndOfArray(ary, element){
  return [...ary,element];
}

function destructivelyAddElementToEndOfArray(ary, element){
  ary.push(element)
  return ary;
}

function accessElementInArray(ary,indexOfAry){
  return ary[indexOfAry];  
}

function destructivelyRemoveElementFromBeginningOfArray(ary){
  ary.shift()
  return ary;
}

function removeElementFromBeginningOfArray(ary){
  var ary = ary.slice(1);
  return ary;
}

function destructivelyRemoveElementFromEndOfArray(ary){
  ary.pop()
  return ary;
}

function removeElementFromEndOfArray(ary){
  return ary.slice(0,-1);
}