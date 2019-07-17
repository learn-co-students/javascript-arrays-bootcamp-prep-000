var chocolateBars=
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'  
];
element='foo';
function addElementToBeginningOfArray(array,element)
{
  var c=[element,...array];
  return c;
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var c=[...array, element];
  return c;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, n)
{
  return array[n];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var c = array.slice(1)
  return c
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  
  var c=array.slice(0,array.length-1)
  return c
}