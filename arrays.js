var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];
  
var names = ["Sam", "Jeff", "Bob"];
  
function addElementToBeginningOfArray(names, Jake) {
  return ["Jake",...names];
}
  
function destructivelyAddElementToBeginningOfArray(names, Jake) {
  names.unshift("Jake");
    
  return names;
}
  
function addElementToEndOfArray(names, Jake) {
  return [...names,"Jake"];
}
  
function destructivelyAddElementToEndOfArray (names, Jake) {
  names.push("Jake");
    
  return names;
}
  
function accessElementInArray (names, Bob) {
  return names[2];
}
  
function destructivelyRemoveElementFromBeginningOfArray(names) {
  names.shift();
  
  return names;
}

function removeElementFromBeginningOfArray(names) {
  names.slice(1);

  return names;
}

function destructivelyRemoveElementFromEndOfArray(names) {
  names.pop();
  
  return names;
}

function removeElementFromEndOfArray(names) {
  return names.slice(0, names.length - 1);
}