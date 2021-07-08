var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"];

var nom='foo';

var numbers=[1,2,3];

function addElementToBeginningOfArray(chocolateBars, nom){
  return [nom, ...chocolateBars];
} 

function destructivelyAddElementToBeginningOfArray(chocolateBars, nom){
  chocolateBars.unshift(nom);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, nom){
  return [...chocolateBars, nom];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, nom){
  chocolateBars.push(nom);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
  return numbers[2];
}

function destructivelyRemoveElementFromBeginningOfArray(numbers){
  numbers.shift()
  return numbers
}

function removeElementFromBeginningOfArray(numbers){
  return numbers.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(numbers){
numbers.pop();
return numbers;
}

function removeElementFromEndOfArray(numbers){
return numbers.slice(0, numbers.length-1);
}

//Done and done//
