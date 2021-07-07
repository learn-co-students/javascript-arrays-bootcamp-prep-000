var chocolateBars = ["snickers", "hundred grand", "kitkat", "crunch"];

function addElementToBeginningofArray(chocolateBars, name){
  var moreChocolateBars = [name,...chocolateBars];
  chocolateBars.unshift(name);
  return moreChocolateBars;
}
function addElementToBeginningOfArray(chocolateBars, name){
  return [name, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, name){
  chocolateBars.unshift(name);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, name){
  var moreChocolateBars = [chocolateBars, ...name];
  chocolateBars.push(name);
  return moreChocolateBars;
}
function addElementToEndOfArray(chocolateBars, name){
  return [...chocolateBars, name];
}
function destructivelyAddElementToEndOfArray(chocolateBars, name){
  chocolateBars.push(name);
  return chocolateBars;
}
function accessElementInArray(chocolateBars, index){
  chocolateBars[3] = "kitkat";
  console.log(chocolateBars[3]);
  return chocolateBars[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(1)
  chocolateBars.slice(1);
  return chocolateBars;
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars){
  chocolateBars = chocolateBars.slice(0, chocolateBars.length - 1)
  return chocolateBars
}