//Test 1-----------------------------
var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");

//Test 2-----------------------------
addElementToBeginningOfArray = function (array, element){
  return [element, ...array]
}

destructivelyAddElementToBeginningOfArray = function (array,element){
  array.unshift(element);
  return array;
}
//Test 3------------------------------
addElementToEndOfArray = function(array,element){
  return [...array,element]
}

destructivelyAddElementToEndOfArray = function(array,element){
  array.push(element);
  return array
}
//Test 4------------------------------
accessElementInArray = function (array,index){
  return array[index]
}
//Test 5------------------------------
destructivelyRemoveElementFromBeginningOfArray = function (array){
  array.shift();
  return array
}
//Test 6------------------------------
removeElementFromBeginningOfArray = function (array){
  return array.slice(1)
  
}
//Test 7------------------------------
destructivelyRemoveElementFromEndOfArray = function (array){
  array.pop();
  return array
}
//Test 8------------------------------
removeElementFromEndOfArray = function (array){
  return array.slice(0,array.length - 1);
}
