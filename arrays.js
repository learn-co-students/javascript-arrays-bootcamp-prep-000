chocolateBars =[
  'snickers',
  'hundredGrand',
  'kitkat', 
  'skittles'
  ];
// adds to the front
function addElementToBeginningOfArray(array, element){
  
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

// adds to the rear
function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}

// display index value
function accessElementInArray(array, index){
  return array[index];
}

//remove the first element of array 
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
// remove from the end 
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
 return array.slice(0, array.length - 1);
}
