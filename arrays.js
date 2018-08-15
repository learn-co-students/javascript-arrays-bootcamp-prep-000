var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var plus1 = "Reeses";


function addElementToBeginningOfArray(chocolateBars, plus1){
  chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  [plus1, ...chocolateBars];
  return chocolateBars;
  
}


function destructivelyAddElementToBeginningOfArray(chocolateBars, plus1){
  chocolateBars.unshift(plus1);
  return chocolateBars;
  
}


function addElementToEndOfArray([chocolateBars], plus1){
  return [chocolateBars, plus1];
  
}


function destructivelyAddElementToEndOfArray(chocolateBars, plus1){
  chocolateBars.push(plus1);
  return chocolateBars;
  
}


function accessElementInArray(chocolateBars, [2]){
  [...chocolateBars];
  return chocolateBars[3];
  
}



function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
  
}


function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.slice(1);
  return chocolateBars;
  
}


function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
  
}


function removeElementFromEndOfArray(chocolateBars){
  newChocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
  return newChocolateBars;
  
}


