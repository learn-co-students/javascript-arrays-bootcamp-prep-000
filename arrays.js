var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
  ];
  

//add element to beginning of array non destructively

function addElementToBeginningOfArray(array, element) {
  return [element,...array];
}

//add element to beginning of array destructively

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}



//add element to end of array non destructively

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

//add element to end of array destructively

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


function accessElementInArray(array, index) {
  return array[index];
}

accessElementInArray(3);

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}



function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
  
}