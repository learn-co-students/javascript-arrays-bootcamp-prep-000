var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(chocolateBars, Hersheys){
  return [Hersheys, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, Hersheys){
  chocolateBars.unshift(Hersheys);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, Godiva){
  return [...chocolateBars, Godiva];
}
function destructivelyAddElementToEndOfArray(chocolateBars, Godiva){
  chocolateBars.push(Godiva);
  return chocolateBars;
}
function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
