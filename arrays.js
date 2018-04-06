var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

function addElementToBeginningOfArray(chocolateBars, string){
 var candy = [string,...chocolateBars];
 return candy;

}

function destructivelyAddElementToBeginningOfArray(chocolateBars, string){
  chocolateBars.unshift(string);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, string){
 var morechocolateBars = [...chocolateBars, string];
 return morechocolateBars;
}

function destructivelyAddElementToEndOfArray (chocolateBars, string){
  chocolateBars.push(string);
  return chocolateBars;
}

function accessElementInArray(chocolateBars,index){
  return chocolateBars [index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  var slicedbars = chocolateBars.slice(1);
  return slicedbars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0,chocolateBars.length-1);
}


