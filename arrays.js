var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars= [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
chocolateBars();


function addElementToBeginningOfArray(array,element){
  return [element,...array];
}


function destructivelyAddElementToBeginningOfArray(list, element){
  list.unshift(element);
  return list;
}

function addElementToEndOfArray(array,element){
  return [...array, element];
}


function destructivelyAddElementToEndOfArray(list, element){
  list.push(element);
  return list;
}


function accessElementInArray(array, index){
  return (array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}


function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}


function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1)
}


