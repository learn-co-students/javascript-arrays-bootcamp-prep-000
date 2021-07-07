var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, foo) { 
   chocolateBars =  ["foo",...chocolateBars];
   return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,foo) {
  chocolateBars.unshift("foo");
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, foo) {
  chocolateBars = [...chocolateBars,"foo"];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars.push("foo");
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars= chocolateBars.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0,chocolateBars.length -1)
  return chocolateBars;
}


