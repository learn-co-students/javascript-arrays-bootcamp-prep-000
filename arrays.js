var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//SOLVED
var addElementToBeginningOfArray = (array, element) => {
  var array2 = [element, ...array];
  return array2;
};

//SOLVED
var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
};

//SOLVED
var addElementToEndOfArray = (array, element) => {
  var array2 = [ ...array, element];
  return array2;
};

//SOLVED
var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
};

//SOLVED
var accessElementInArray = (array, index) => {
  var element = array[index];
  return element;
};

//SOLVED
var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift();
  return array;
};

//SOLVED
var removeElementFromBeginningOfArray = (array) => {
  var array2 = array.slice(1);
  return array2;
};

var destructivelyRemoveElementFromEndOfArray = (array) => {
  array.pop();
  return array;
}

var removeElementFromEndOfArray = (array) => {
  var array2 = array.slice(0, array.length - 1);
  return array2;
}





