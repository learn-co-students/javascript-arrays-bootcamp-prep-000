var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars,foo){
  var newArray = [foo, ...chocolateBars];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,foo){
  chocolateBars.unshift(foo);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars,foo){
  var newArray = [...chocolateBars, foo];
  return newArray;
}

function destructivelyAddElementToEndOfArray(chocolateBars,foo){
  chocolateBars.push(foo);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
  index = 2;
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  var newArray = chocolateBars.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
    newArray = chocolateBars.slice(0,chocolateBars.length - 1);
    return newArray
}
