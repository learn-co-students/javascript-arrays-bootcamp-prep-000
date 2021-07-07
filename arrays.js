var chocolateBars = new Array('snickers', 'hundred grand', 'kitkat', 'skittles');

//TODO2

cities = ["foo", "San Francisco"];

function addElementToBeginningOfArray(array,element)
{
  return [element,...array];
}

addElementToBeginningOfArray(cities,"Miami");

//TODO3

cities2 = ["NYC", "San Francisco"];

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array
}

destructivelyAddElementToBeginningOfArray(cities2, 'Milan');

//TODO4

function addElementToEndOfArray(array,element){
  return [...array, element];
  
}

//TODO5

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array;
}

//TODO6

function accessElementInArray(array, index) {

  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
 array.shift()
 return array
}

function removeElementFromBeginningOfArray(array){
return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}


